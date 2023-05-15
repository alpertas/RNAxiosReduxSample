import React from 'react';
import {Text, View} from 'react-native';

// Styles
import styles from './styles/AllProductStyles';

// Actions
import {getAllProducts} from '../../redux/actions/productActions';

const AllProducts = () => {
  return (
    <View style={styles.container}>
      <Text>AllProductsPage</Text>
    </View>
  );
};

export default AllProducts;
