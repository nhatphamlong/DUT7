import React from 'react';
import {TextInput, View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Navigator_bar from './Navigator_bar.js';
import Upbackground from './image/home.upback.png';
import Avatar from './image/avatar.png';
import Bell from './image/thebell.png';

const But_bell = () =>{
    return(
        <View style={styles.button}>
            <TouchableOpacity onPress={() => alert("Xem thông báo nào!")}>
                <Image source={Bell} style={styles.image_bell} /> 
            </TouchableOpacity>
        </View>
    )
}
const Hi_mem = (props) => {
    return(
        <View style={styles.upcontainer}>
            <ImageBackground
                source={Upbackground}
                resizeMode='cover'
                style={styles.image_upcontainer}
            >
                <Image source={Avatar} style={styles.image_avatar}/>
                <View style={styles.text_contai}>
                    <Text style={styles.text_himem}>Hello, {props.name}</Text>
                    <Text style={styles.text_welcom}>Welcome back to DUT7CHV</Text>
                </View>
                <But_bell />
            </ImageBackground>
        </View>
    )
}

const Search = () => {
    return (
        <View style={styles.search_contai}>
            <Text style={styles.text_tit}>Bạn muốn tìm kiếm gì?</Text>
            <Text style={styles.text_tit}>Nhập thông tin vào ô dưới đây nhé!</Text>
            <View style={styles.rec_search}>
                <TextInput style={styles.text_search} placeholder="Search">
                </TextInput>
            </View>
        </View>
    )
}

const Hompage = () => {
    return(
        <View style={styles.container}>
            <Hi_mem name="Di" />
            <View style={styles.downcontainer}>
                <Search />    
                <View style={styles.team_contai}></View>
            </View>
            <Navigator_bar />
        </View>
    )
}

export default Hompage;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#EEF1FC'
    },
    upcontainer: {
        flex: 2.5,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
    },
    image_upcontainer: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image_avatar: {
        width: 70,
        height: 70,
        marginLeft: 15,
        marginRight: 5,
    },
    text_contai: {
        flexDirection: "column",
    },  
    text_himem: {
        fontSize: 22,
        color: "#ffffff",
    },
    text_welcom: {
        fontSize: 15,
        color: "#000000"
    },
    button: {
        width: 60,
        height:60,
        borderColor: "rgba(0,0,0,0.3)",
        borderRadius: 5,
        borderWidth: 2,
        marginLeft: 15,
    },
    image_bell:{
        width: 50,
        height:50,
        alignSelf: 'center',
    },  
    downcontainer: {
        flex: 7.5,
        flexDirection: "column",
        alignSelf: 'center',
        justifyContent: 'flex-start', 
        //backgroundColor: '#000000'
    },
    search_contai: {
        flex: 2,
        flexDirection: "column",
        backgroundColor: "rgba(249,225,249,0.65)",
        width: 330,
        height: 70,
        marginRight: 20, 
        marginLeft: 20,
        borderWidth: 1, 
        borderColor: '#ffffff',
        borderRadius: 20
    },
    text_tit:{
        fontSize: 18,
        marginLeft: 10, 
        marginTop: 2,
    },
    rec_search: {
        width: 300,
        height: 40, 
        backgroundColor:'#EEF1FC',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ffffff',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
    text_search: {
        fontSize: 16,
    },
    team_contai: {
        flex: 3,
    }
})