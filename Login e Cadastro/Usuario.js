import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContexto } from "./Context";

export function Usuario(props) {

    const { utils, setContexto } = useContext(UtilsContexto)

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>
            <View style={{ marginTop: "50px" }}>
                <Text style=
                    {{ fontSize: "70px" }}>Usuarios </Text>
            </View>
            <UserBox utils={utils}>
            </UserBox>
            <UserBox utils={utils}>
            </UserBox>
        </View>
    )
}


function UserBox(props) {
    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>
            <View style={{ border: "solid 1px black", width: "500px", height: "100px", borderRadius: "10px", marginBottom: "20px" }}>
                <View style={{ marginTop: "5px", marginLeft: "10px" }}>
                    <Text>Nome: {props.utils.usuario}; </Text>
                    <Text>Idade: {props.utils.idade} </Text>
                    <Text>Sexo: {props.utils.sexo} </Text>
                    <Text>Email: {props.utils.email} </Text>
                </View>
            </View>
        </View>
    );
}