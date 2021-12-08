import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Bannoidung from './components/image/noidung.png';
import Bantruyenthong from './components/image/truyenthong.png';
import Bankythuat from './components/image/kythuat.png';
import Banhaucan from './components/image/haucan.png';
import Homepage from './components/image/homepage.png';
import Member from './components/image/member.png';
import Charts from './components/image/charts.png';
import Teamwork from './components/image/teamwork.png';
import Messenger from './components/image/messenger.png';

const Image_logo = (name) => {
  switch (name)
  {
    case "noidung": return(Bannoidung);
    case "truyenthong" : return(Bantruyenthong);
    case "kythuat" : return(Bankythuat);
    case "haucan" : return(Banhaucan);
  }
}

const Tit_team = (name) => {
  switch (name)
  {
    case "noidung": return("BAN NỘI DUNG");
    case "truyenthong" : return("BAN TRUYỀN THÔNG");
    case "kythuat" : return("BAN KỸ THUẬT");
    case "haucan" : return("BAN HẬU CẦN");
  }
}

const Logo_team = (props) => {
  return (
    <View>
      <Image source={Image_logo(props.name)} style={styles.image_logoteam} /> 
      <Text style={styles.texttit}>{Tit_team(props.name)}</Text>
    </View>
  )
}

const Feature_left = () => {
  return (
    <View style={styles.left_container}>
      <View style={[styles.squares, {backgroundColor: 'rgba(255, 216, 216, 0.5)'}]}>
        <Text style={styles.text_squares}>TIMELINE</Text>
      </View>
      <View style={[styles.squares, {backgroundColor: 'rgba(183, 252, 141, 0.5)'}]}>
        <Text style={styles.text_squares}>ĐÁNH GIÁ</Text>
      </View>
      <View style={[styles.squares, {backgroundColor: 'rgba(104, 224, 240, 0.5)'}]}>
        <Text style={styles.text_squares}>HÌNH ẢNH</Text>
      </View>
    </View>
  )
}

const Feature_right = () => {
  return (
    <View style={styles.left_container}>
      <View style={[styles.squares, {backgroundColor: 'rgba(255, 196, 82, 0.5)'}]}>
        <Text style={styles.text_squares}>PHÂN CHIA CÔNG VIỆC</Text>
      </View>
      <View style={[styles.squares, {backgroundColor: 'rgba(210, 84, 175, 0.5)'}]}>
        <Text style={styles.text_squares}>SƠ ĐỒ THÀNH VIÊN</Text>
      </View>
      <View style={[styles.squares, {backgroundColor: 'rgba(247, 255, 149, 0.5)'}]}>
        <Text style={styles.text_squares}>BIÊN BẢN HỌP NỘI BỘ</Text>
      </View>
    </View>
  )
}

const Image_navibut = (name) => {
  switch (name)
  {
    case "Homepage": return(Homepage);
    case "Member": return(Member);
    case "Charts": return(Charts);
    case "Teamwork": return(Teamwork);
    case "Messenger": return(Messenger);
  }
}

const Navigation_but = (props) => {
  return(
    <View style={styles.button}>
      <TouchableOpacity onPress={() => alert(props.name)}>
        <Image 
          source={Image_navibut(props.name)} 
          style={styles.image_button}
        />
      </TouchableOpacity>
    </View>
  )
}

const Navigation_bar = () => {
  return (  
    <View style={styles.navigation_bar}>
      <Navigation_but name="Homepage" />
      <Navigation_but name="Member" />
      <Navigation_but name="Charts" />
      <Navigation_but name="Teamwork" />
      <Navigation_but name="Messenger" />
    </View>
  )
}

const ABC_Team = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.up_container}>
        <Logo_team name="truyenthong" />
      </View>
      <View style={styles.down_container}>
        <Feature_left />
        <Feature_right />
      </View>
      <View style={styles.navigation_bar}>
        <Navigation_bar />
      </View>
    </View>
  )
}

export default ABC_Team;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF1FC',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  up_container: {
    flex: 3,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
  image_logoteam: {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
  },
  texttit: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  down_container:{
    flex: 7, 
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  left_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squares: {
    width: 150,
    height: 140,
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 15,
  },
  text_squares: {
    width: 120,
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  navigation_bar: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 45, 
    height: 45, 
    //borderColor: 'rgba(236, 116, 170,0.8)',
    borderRadius: 5,
    //borderWidth: 1,
    marginLeft: 10, 
    marginRight: 10,
  },
  image_button:{
    width: 35,
    height: 35,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  }
});
