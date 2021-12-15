import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <View style={styles.container}>
      <Homepage/>
    </View>
  )
}
export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})