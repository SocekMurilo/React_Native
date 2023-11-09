import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContexto } from "./Context";
import { useScrollToTop } from "@react-navigation/native";

export function Usuario(props) {

    const { utils, setContexto } = useContext(UtilsContexto)


    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>
            <View style={{ marginTop: "50px" }}>
                <Text style=
                    {{ fontSize: "70px" }}>Usuarios</Text>
            </View>
            <UserBox utils={utils}>
            </UserBox>
            <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        marginTop: "2px",
                        marginBottom: "213px",
                        width: "350px",
                        height: "50px",
                        alignItems: "center",
                        justifyContent: "center"
                }} onPress={() => props.navigation.navigate("Cadastro")}>
                    <Text style={{ fontSize: "20px" }}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


function UserBox(props) {


    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>
            <View style={{ border: "solid 1px black", width: "500px", height: "100px", borderRadius: "10px", marginBottom: "20px", display: "flex", flexDirection: "Row"}}>
                <View style={{ marginTop: "5px", marginLeft: "10px"}}>
                    <Text>Nome: {props.usuario} </Text>
                    <Text>Idade: {props.idade} </Text>
                    <Text>Sexo: {props.sexo} </Text>
                    <Text>Email: {props.email} </Text>
                    <Text>Id: {props.id} </Text>
                </View>
                <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        marginTop: "2px",
                        width: "100px",
                        height: "25px",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        marginLeft: "20px"
                    }} /*onPress={() => Deletar()}*/>
                    <Text style={{ fontSize: "20px" }}>Deletar</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}