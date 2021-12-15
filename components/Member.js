import React from "react";
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native';
import Navigation_bar from "./Navigator_bar.js";
import thanhvien from "./image/thanhvien.png"

  
const Butt = (props) => {
    return(
        <View style={[styles.button, {backgroundColor:props.backgroundColor}]}>
            <TouchableOpacity onPress={() => alert(props.name)}>
                <Text style={styles.texttit}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Member = () => {
    return(
        <View style={styles.container}>
            <View style={styles.upcontainer}>
                <Image source={thanhvien} style={styles.image_tittle} />
            </View>
            <View style={styles.downcontainer}>
                <Butt name="Founder" backgroundColor='#E1EEF6' />
                <Butt name="Thành viên khóa 1" backgroundColor='#E1EEF6' />
                <Butt name="Thành viên khóa 2" backgroundColor='#F6E1F6' />
                <Butt name="Thành viên khóa 3" backgroundColor='#E1F6EA' />
                <Butt name="Thành viên khóa 4" backgroundColor='#F6EFE1' />
                <Butt name="Thành viên khóa 5" backgroundColor='#F6E1E1' />
            </View>
            <Navigation_bar />
        </View>
    )
}

export default Member;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEF1FC",
    },
    upcontainer: {
        flex: 2.5,
        justifyContent: "center",
        alignItems: "center",
    },
    texttit: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image_tittle: {
        width: 270,
        height: 40,
        alignSelf: 'center',
    },
    downcontainer: {
        flex: 7.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'nowrap',
    },
    button: {
        width: 300,
        height: 70,
        marginTop: 5,
        marginBottom: 5,
        padding: 20,
        borderRadius: 24,
        alignSelf:'center',
    },
})