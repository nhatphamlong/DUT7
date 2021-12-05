import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Write = (props) => {
  return(
    <View>
      <Text style={styles.text_tit_input}>{props.name}</Text>
      <View style={styles.rec_input}>
        <TextInput  style={styles.text_input}
                    placeholder={props.name}
        >{props.name}</TextInput>
      </View>
    </View>
  )
};

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
}

const Signup_1 = () => {
  return (
    <View style={styles.container}>

      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(252, 81, 133, 1)', 'rgba(107, 80, 114, 1)', 'rgba(54, 79, 107, 1)']}
        style={styles.background}
      />

      <Text style={styles.text_tit}>ĐĂNG KÝ</Text>

      <Write name="Họ và tên"/>
      <Write name="Tên đăng nhập"/>
      <Write name="Mật khẩu"/>
      <Write name="Nhập lại mật khẩu"/>
      
      <Butt name="TIẾP TỤC"/>
      
    </View>
  );
}

export default Signup_1;

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
  text_tit_input:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  rec_input: {
    width: 350,
    height: 50, 
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ffffff',
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  text_input: {
    width: 300,
    height: 50,
    fontSize: 17,
    color: '#FFC193',
    alignSelf: 'center',
  }
});
