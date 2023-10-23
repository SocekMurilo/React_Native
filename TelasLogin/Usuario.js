import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from 'react';

export function Usuario(props) {

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>
            <View style={{ marginTop: "50px"}}>
            <Text style={{ fontSize: "70px"}}>Usuarios </Text>
            </View>
            <View style={{border: "solid 1px black", width: "500px", height: "100px", borderRadius: "10px", marginBottom:"689px"}}>
                <View style={{marginTop: "5px", marginLeft: "10px"}}>
                <Text>Nome: Murilo</Text>
                <Text>Idade: 19</Text>
                <Text>Sexo: Masculino</Text>
                <Text>Recebe Notificação</Text>
                </View>

            </View>
        </View>
    );
}