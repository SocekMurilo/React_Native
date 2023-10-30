import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContexto } from "./Context";

export function Historico(props) {

    const {utils, setContexto} = useContext(UtilsContexto)


    function goToCalculadora(){
        props.navigation.navigate('Calculadora')
    }

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>
            <View style={{ marginTop: "50px" }}>
                <Text style={{ fontSize: "70px" }}>Histórico</Text>
            </View>

            <View style={{border: "solid 1px black", width: "500px", height: "400px", borderRadius: "10px",marginTop: "20px", backgroundColor: "white",}}>
                <View style={{marginTop: "5px", marginLeft: "10px"}}>
                    <Text>{utils.text}</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity onPress={() => goToCalculadora()} style={styles.Bot2} >Voltar</TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    Bot2: {
      padding: '7px',
      backgroundColor:"white",
      display: "flex",
      alignItems: "center",
      marginHorizontal: "8px",
      borderRadius: '5px',
      marginTop: '30px',
      fontSize: "28px",
      width: "400px",
      border: "solid 1px black",
      marginBottom: "343px"
    }
  });