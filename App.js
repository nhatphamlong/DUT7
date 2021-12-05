import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Anhlogo from './assets/Logo.png'; 
import { LinearGradient } from 'expo-linear-gradient';

const Butt = (props) => {
  return(
    <View>
      <LinearGradient // Button Linear Gradient
          colors={['rgba(255, 178, 29, 0.8)','rgba(255, 132, 221, 0.4)']}
          style={styles.button}
        >
          <TouchableOpacity onPress={() => alert(props.name)}>
            <Text style={styles.text_button}>{props.name}</Text>
          </TouchableOpacity>
        </LinearGradient>
    </View>
  )
};

const Mainpage = () => {
  return (
    <View style={styles.container}>
    <LinearGradient
    // Background Linear Gradient
      colors={['rgba(252, 81, 133, 1)', 'rgba(107, 80, 114, 1)', 'rgba(54, 79, 107, 1)']}
      style={styles.background}
    />

    
      <View style={styles.upcontain}>
        <Image source={Anhlogo} style={styles.Imagelogo}/>
        <Text style={styles.texttit}>ĐIỀU ƯỚC THỨ 7</Text>
        <Text style={styles.texttit}>CHUYÊN HÙNG VƯƠNG</Text>
      </View>
      <View style={styles.downcontain}>
        <Butt name="ĐĂNG NHẬP"/>
        <Butt name="ĐĂNG KÝ"/>
      </View>
    </View>
  );
}

export default Mainpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
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
    width: 200,
    height: 70,
    marginTop: 20,
    marginBottom: 10,
    padding: 20,
    borderRadius: 24,
    alignSelf:'center',
  },
  text_button: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});
