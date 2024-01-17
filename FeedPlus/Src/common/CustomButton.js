import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import fonts from './fonts';
import FontsSize from './FontsSize';
import MarginHW from './MarginHW';
import { Colors } from './color';

const CustomButton = (props) => {
    return (
            <TouchableOpacity onPress={() => { props.Onclick() }} style={styles.Buttonview}>
                {props.loading ? (<ActivityIndicator size="big" color="#fff" /> )
                :
                (<Text style={styles.ButtonText}>{props.title}</Text>)}
            </TouchableOpacity>
        )

};

export default CustomButton;

const styles = StyleSheet.create({
    Buttonview: {
        backgroundColor: Colors.buttonColor, width: wp('90%'), height: MarginHW.MarginH55,
        marginVertical: MarginHW.MarginH10,
        alignItems: 'center', justifyContent: 'center',
        borderRadius: MarginHW.MarginW5
    },
    ButtonText: { color: Colors.white, fontFamily: fonts.PoppinsMedium, fontSize: FontsSize.size18 },
});
