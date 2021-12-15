import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Member from './components/Member.js';
import ABC_Team from './components/team_main.js';

const App = () => {
  return (
    <View style={styles.container}>
      <ABC_Team name="haucan" />
    </View>
  )
}
export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})