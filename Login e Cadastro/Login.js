import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useContext, useState } from 'react';
import { UtilsContexto } from "./Context";

export function Login(props) {

    const [email, setEmail] = useState("")
    const {utils, setUtils} = useContext(UtilsContexto)

    const [senha, setSenha] = useState("")
    const [usuario, setUsuario] = useState("")

    function goToUsuario(){
        if(usuario == usuario && senha == senha){
        setUtils ({...utils, nome: nome, idade: idade, sexo: sexo, email: email})
        props.navigation.navigate('Usuario')
        }
        else
            return
    }

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>

            <View style={{ marginTop: "100px"}}>
            <Text style={{ fontSize: "70px"}}>LOGIN </Text>
            </View>

            <View style={{ alignItems: "flex-start" }}>
                <Text style={{ marginTop: "60px" }}>Usuário</Text>
                <div>
                    <TextInput style={{ borderRadius: "5px", backgroundColor: "white", marginBottom: "20px", width: "350px", height: "30px" }}
                        value={usuario}
                        onChangeText={e => setUsuario(e)}
                    />
                </div>
            </View>

            <View style={{ alignItems: "flex-start" }}>
                <Text>Senha</Text>
                <div>
                    <TextInput style={{ borderRadius: "5px", backgroundColor: "white", marginBottom: "20px", width: "350px", height: "30px" }}
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={e => setSenha(e)}
                    />
                </div>
            </View>

            <div>
                <TouchableOpacity
                    style={{
                        width: "200px",
                        innerHeight: "40px",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        marginTop: "200px",
                        marginBottom: "30px",
                        width: "350px",
                        height: "50px",
                        alignItems: "center",
                        justifyContent: "center"
                    }} onPress={() => goToUsuario("Usuario")}>
                    <Text style={{ fontSize: "20px" }}>Login</Text>
                </TouchableOpacity>

            </div>
            <div>
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

            </div>
        </View>
    );
}