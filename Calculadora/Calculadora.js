import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import { useContext, useState } from 'react';
import { UtilsContexto } from "./Context";


export function Calculadora(props) {

    const [text, setText] = useState("")
    const [resultado, setResultado] = useState("")
    const {utils, setUtils} = useContext(UtilsContexto)


    function goToHistorico(){
        setUtils({...utils, text: text, resultado: resultado})
        props.navigation.navigate('Historico')
    }
    function Result(){
        eval(text)
    }

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>
            <View style={{ marginTop: "50px"}}>
            <Text style={{ fontSize: "70px"}}>Calculadora</Text>

            </View>
        <View style={{border: "solid 1px black", width: "500px", height: "100px", borderRadius: "10px",marginTop: "20px", backgroundColor: "white"}}>
                <View style={{marginTop: "5px", marginLeft: "10px"}}>
                    <Text>{text}{resultado}</Text>
                </View>
            </View>

            <View style={{display: "flex", flexDirection: "row"}}>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + " + ")}>+</TouchableOpacity>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + " - ")}>-</TouchableOpacity>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + " / ")}>/</TouchableOpacity>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + " * ")}>X</TouchableOpacity>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + " = " + eval(text))}  >=</TouchableOpacity>  
            </View>
            <View style={{display: "flex", flexDirection: "row", marginTop: "20px"}}>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + "1")}>1</TouchableOpacity>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + "2")}>2</TouchableOpacity>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + "3")}>3</TouchableOpacity>
            </View>
            <View style={{display: "flex", flexDirection: "row"}}>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + "4")}>4</TouchableOpacity>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + "5")}>5</TouchableOpacity>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + "6")}>6</TouchableOpacity>
            </View>
            <View style={{display: "flex", flexDirection: "row"}}>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + "7")}>7</TouchableOpacity>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + "8")}>8</TouchableOpacity>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + "9")}>9</TouchableOpacity>
            </View>
            <View style={{display: "flex", flexDirection: "row"}}>
                <TouchableOpacity style={styles.Bot} onPress={() => setText(text + "0")}>0</TouchableOpacity>
            </View>
            <View style={{display: "flex", flexDirection: "row"}}>
                <TouchableOpacity name="Limpar" style={styles.Bot2} onPress={() => setText("")}>Limpar</TouchableOpacity>
                <TouchableOpacity onPress={() => goToHistorico("Historico")} style={styles.Bot2} >Histórico</TouchableOpacity>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
  Bot: {
    padding: '7px',
    backgroundColor:"white",
    display: "flex",
    alignItems: "center",
    marginHorizontal: "8px",
    borderRadius: '5px',
    marginTop: '10px',
    fontSize: "28px",
    width: "40px",
    border: "solid 1px black"
  },
  Bot2: {
    padding: '7px',
    backgroundColor:"white",
    display: "flex",
    alignItems: "center",
    marginHorizontal: "8px",
    borderRadius: '5px',
    marginTop: '30px',
    fontSize: "28px",
    width: "200px",
    border: "solid 1px black",
    marginBottom: "343px"
  }
});