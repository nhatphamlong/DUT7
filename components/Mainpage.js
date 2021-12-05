import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Anhlogo from './assets/Logo.png'; 

export default function Mainpage() {
  return (
    <View style={styles.container}>
      <View style={styles.upcontain}>
        <Image source={Anhlogo} style={styles.Imagelogo}/>
        <Text style={styles.texttit}>ĐIỀU ƯỚC THỨ 7</Text>
        <Text style={styles.texttit}>CHUYÊN NBK</Text>
      </View>
      <View style={styles.downcontain}>
        <TouchableOpacity onPress={() => alert('Đăng nhập nào!')} style={styles.button}>
          <Text style={styles.textbutton}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Đăng ký nào!')} style={styles.button}>
          <Text style={styles.textbutton}>ĐĂNG KÝ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upcontain: {
    flex:5,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    //backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
  Imagelogo: {
    width: '35%',
    height: '35%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  texttit: {
    color: '#FFD66D',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  downcontain: {
    flex:5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    //backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
  button: {
    backgroundColor: '#FDA743C9',
    padding: 20,
    borderRadius: 24,
    alignSelf: 'center',
    marginBottom: 10,
    width: '70%',
    height: '20%',
  },
  textbutton: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
