import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from 'react';

export function Calculadora(props) {

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>
            <View style={{ marginTop: "50px"}}>
            <Text style={{ fontSize: "70px"}}>Calculadora</Text>
            </View>
            <View style={{border: "solid 1px black", width: "500px", height: "100px", borderRadius: "10px", marginBottom:"689px"}}>

            </View>
        </View>
    );
}