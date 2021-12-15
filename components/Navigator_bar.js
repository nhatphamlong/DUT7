import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Homepage from './image/homepage.png';
import Member from './image/member.png';
import Charts from './image/charts.png';
import Teamwork from './image/teamwork.png';
import Messenger from './image/messenger.png';

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

const Navigator_bar = () => {
    return(
    <View style={styles.navigation_bar}>
      <Navigation_but name="Homepage" />
      <Navigation_but name="Member" />
      <Navigation_but name="Charts" />
      <Navigation_but name="Teamwork" />
      <Navigation_but name="Messenger" />
    </View>
    )
}

export default Navigator_bar;

const styles = StyleSheet.create ({
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
})