import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

// SAMPLE
import {useDispatch, useSelector} from 'react-redux';
import {getAllProducts} from './src/redux/actions/productActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text>Hello world!</Text>
    </SafeAreaView>
  );
} //FSD therookie

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
