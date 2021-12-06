import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';
import Anhnen from './components/image/anhnen.png';

const Write = (props) => {
  return(
    <View>
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
};

const Signin = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
    <ImageBackground
      source={Anhnen}
      resizeMode="cover"
      style={styles.backgound}
    >

      <View style={styles.up_contain}>
        <Text style={styles.text_tit}>ĐĂNG NHẬP</Text>
        
        <Write name="Tên đăng nhập"/>
        <Write name="Mật khẩu"/>

        <View style={styles.cb_contain}>
          <Checkbox   style={styles.rec_checkbox}
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? '#4630EB' : undefined}/>
          <Text style={styles.text_checkbox}>Ghi nhớ tài khoản cho lần sau</Text>
        </View>

        <Butt name="ĐĂNG NHẬP"/>
      </View>
      <View style={styles.down_contain}>
      </View>
    </ImageBackground>  
    </View>
  );
}

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgound:{
    flex:1,
    justifyContent: 'center',
  },
  up_contain: {
    flex:7,
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
    flex:3,
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
    width: 350,
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
    width: 300,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color:'#FFC193',
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
