import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const AllProducts: React.FC<Props> = ({name, baseEnthusiasmLevel = 0}) => {
  return (
    <View style={styles.container}>
      <Text>Alper</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AllProducts;
