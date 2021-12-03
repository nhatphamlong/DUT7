import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
    <LinearGradient
        // Background Linear Gradient
        colors={['#FC5185', '#6B5072', '#364F6B']}
        style={styles.background}
      />
      <View style={styles.upcontain}>
        <Text style={styles.texttit}>ĐĂNG NHẬP</Text>
        <View style={styles.recinput}>
          <TextInput  style={styles.textinput}
                      textContentType='emailAddress'
                      keyboardType='email-address'
                      placeholder="Account"
          >Tên đăng nhập
          </TextInput>
        </View>
        <View style={styles.recinput}>
          <TextInput  style={styles.textinput}
                      //textContentType='emailAddress'
                      //keyboardType='email-address'
                      placeholder="Password"
          >Password
          </TextInput>
        </View>
        <TouchableOpacity onPress={() => alert('Đăng nhập nào!')} style={styles.button}>
          <Text style={styles.textbutton}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.downcontain}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    //backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upcontain: {
    //backgroundColor: '#000000',
     flex:6,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
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
    marginBottom: 40,
  },
  downcontain: {
    flex:4,
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
    alignSelf:'center',
    marginBottom: 10,
    marginTop: 20,
    width: 200,
    height: 70,
  },
  textbutton: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  recinput: {
    width: 300,
    height: 50, 
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ffffff',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  textinput: {
    color: '#ffffff',
    width: 250,
    height: 50,
    fontSize: 17,
    alignSelf: 'center',
  }
});
