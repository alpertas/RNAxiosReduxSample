import React, {useState, useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// Styles
import styles from './styles/AllProductStyles';

// Actions
import {getAllProducts} from '../../redux/actions/productActions';

const AllProducts = () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.product.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const renderProductItem = ({item}) => (
    <View style={styles.productItem}>
      <Text>
        <Text style={styles.label}>ID: </Text>
        {item.id}
      </Text>
      <Text>
        <Text style={styles.label}>Name: </Text>
        {item.name}
      </Text>
      <Text>
        <Text style={styles.label}>Price: </Text>
        {item.price}
      </Text>
      <Text>
        <Text style={styles.label}>Description: </Text>
        {item.description}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>AllProductsPage</Text>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()} // Convert id to string for keyExtractor
      />
    </View>
  );
};

export default AllProducts;
