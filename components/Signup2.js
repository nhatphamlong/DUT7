import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Picker, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react/cjs/react.development';
import Anhnen from './image/anhnen.png';
//import { Picker } from '@react-native-picker/picker';

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

const SelectBox_Team = () => {
  const [selectValue, setSelectValue] = useState("");
  return (
    <View style={styles.rec_input}>
      <Picker
        selectValue={selectValue}
        style={{width: 330, height: 50}}
        onValueChange={(itemValue,itemIndex) => setSelectValue(itemValue)}
      >
        <Picker.Item label="BAN NỘI DUNG" value="noidung"/>
        <Picker.Item label="BAN TRUYỀN THÔNG" value="truyenthong"/>
        <Picker.Item label="BAN HẬU CẦN" value="haucan"/>
        <Picker.Item label="BAN KỸ THUẬT" value="kythuat"/>
      </Picker>
    </View>
  );
}

const SelectBox_Grade = () => {
  const [selectValue, setSelectValue] = useState();
  return (
    <View style={styles.rec_input}>
      <Picker
        selectValue={selectValue}
        style={{width: 330, height: 50}}
        onValueChange={(itemValue,itemIndex) => setSelectValue(itemValue)}
      >
        <Picker.Item label="KHÓA 0" value="K0"/>
        <Picker.Item label="KHÓA 1" value="K1"/>
        <Picker.Item label="KHÓA 2" value="K2"/>
        <Picker.Item label="KHÓA 3" value="K3"/>
        <Picker.Item label="KHÓA 4" value="K4"/>
        <Picker.Item label="KHÓA 5" value="K5"/>
        <Picker.Item label="KHÓA 6" value="K6"/>
        <Picker.Item label="KHÓA 7" value="K7"/>
        <Picker.Item label="KHÓA 8" value="K8"/>
        <Picker.Item label="KHÓA 9" value="K9"/>
        <Picker.Item label="KHÓA 10" value="K10"/>      
      </Picker>
    </View>
  );
}

const SelectBox_Class = () => {
  const [selectValue, setSelectValue] = useState();
  return (
    <View style={styles.rec_input}>
      <Picker
        selectValue={selectValue}
        style={{width: 330, height: 50}}
        onValueChange={(itemValue,itemIndex) => setSelectValue(itemValue)}
      >
        <Picker.Item label="A" value="A"/>
        <Picker.Item label="B" value="B"/>
        <Picker.Item label="C1" value="C1"/>
        <Picker.Item label="C2A" value="C2A"/>
        <Picker.Item label="C2B" value="C2B"/>
        <Picker.Item label="C3A" value="C3A"/>
        <Picker.Item label="C3B" value="C3B"/>
        <Picker.Item label="C4" value="C4"/>
        <Picker.Item label="C5A" value="C5A"/>
        <Picker.Item label="C5B" value="C5B"/>
        <Picker.Item label="C6" value="C6"/>
        <Picker.Item label="C7" value="C7"/>
        <Picker.Item label="C8" value="C8"/>   
      </Picker>
    </View>
  );
}

const Signup2 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Anhnen}
        resizeMode="cover"
        style={styles.backgound}
      >
        <Text style={styles.texttit}>ĐĂNG KÝ</Text>
        <Text style={styles.text_tit_input}>Ban hoạt động</Text>
        <SelectBox_Team />   

        <Text style={styles.text_tit_input}>Khóa hoạt động</Text>
        <SelectBox_Grade />

        <Text style={styles.text_tit_input}>Lớp</Text>
        <SelectBox_Class />

        <Text style={styles.text_tit_input}>Số điện thoại</Text>
        <View style={styles.rec_input}>
          <TextInput  style={styles.text_input}
                      placeholder="Số điện thoại"
          ></TextInput>
        </View>

        <Butt name="HOÀN TẤT"/>

      </ImageBackground>
    </View>
  );
}

export default Signup2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgound:{
    flex:1,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  rec_input: {
    width: 330,
    height: 50, 
    backgroundColor: 'rgba(255, 193, 147, 0)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
    //marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  text_input: {
    fontSize: 20,
    color: '#000000',
    marginLeft: 10,
    fontWeight:'bold',
  }
});
