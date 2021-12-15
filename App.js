import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ABC_Team from "./components/Team_main.js";

const App = () => {
  return (
    <View style={styles.container}>
      <ABC_Team name="noidung" />
    </View>
  )
}
export default App; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})