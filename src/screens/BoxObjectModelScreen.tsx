import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    paddingVertical: 10,
    marginHorizontal: 30,
    marginTop: 30, 
    fontSize: 30,
    // width: 150,
    borderWidth: 5,
    // backgroundColor: 'red',
  },
});
