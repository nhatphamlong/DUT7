import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';

export default function Resign() {
  const [isChecked, setChecked] = useState(false);
  const [isResign, setResign] = useState(true);

  return (
    <View style={styles.container}>

      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(252, 81, 133, 1)', 'rgba(107, 80, 114, 1)', 'rgba(54, 79, 107, 1)']}
        style={styles.background}
      />

      <View style={styles.up_contain}>
        <Text style={styles.text_tit}>ĐĂNG NHẬP</Text>
        <View style={styles.rec_input}>
          <TextInput  style={styles.text_input}
                      textContentType='emailAddress'
                      keyboardType='email-address'
                      placeholder="Account"
          >Tên đăng nhập  
          </TextInput>
        </View>
        <View style={styles.rec_input}>
          <TextInput  style={styles.text_input}
                      placeholder="Password"
          >Mật khẩu
          </TextInput>
        </View>

        <View style={styles.cb_contain}>
          <Checkbox   style={styles.rec_checkbox}
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? '#4630EB' : undefined}/>
          <Text style={styles.text_checkbox}>Ghi nhớ tài khoản cho lần sau</Text>
        </View>
        <LinearGradient // Button Linear Gradient
          colors={['rgba(255, 178, 29, 0.8)','rgba(255, 132, 221, 0.4)']}
          style={styles.button}
        >
          <TouchableOpacity onPress={() => alert('Đang đăng nhập!')}>
            <Text style={styles.text_button}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.down_contain}>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  up_contain: {
    flex:6,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  text_tit: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD66D',
    marginBottom: 40,
    textAlign: 'center',
  },
  down_contain: {
    flex:4,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',    
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
  rec_input: {
    width: 300,
    height: 50, 
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ffffff',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  text_input: {
    width: 250,
    height: 50,
    fontSize: 17,
    color: '#ffffff',
    alignSelf: 'center',
  },
  cb_contain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rec_checkbox: {
    margin: 10,
    marginLeft: 30,
    borderWidth:2,
    borderColor: '#ffffff',
  },
  text_checkbox: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
  }
});
