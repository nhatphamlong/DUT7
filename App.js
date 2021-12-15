import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Member from './components/Member.js';

const App = () => {
  return (
    <View style={styles.container}>
      <Member/>
    </View>
  )
}
export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})