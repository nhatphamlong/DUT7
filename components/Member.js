import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import Navigation_bar from "./Navigator_bar.js";

const Member = () => {
    return(
        <View style={styles.container}>
            <Navigation_bar />
        </View>
    )
}

export default Member;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEF1FC",
    }
})