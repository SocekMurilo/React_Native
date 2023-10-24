import { View, Text, TextInput, TouchableOpacity, Switch, Image } from "react-native";
import{ useState, useContext } from 'react';
import { UtilsContexto } from "./Context";


export function Cadastro(props) {
    
    const [inicio, setInicio] = useState(false)
    const {utils, setUtils} = useContext(UtilsContexto)

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [email, setEmail] = useState("")



    function goToUsuario(){
        setUtils ({...utils, nome: nome, idade: idade, sexo: sexo, email: email})
        props.navigation.navigate('Usuario')
    }

    return (
        <View style={{ alignItems: "center", backgroundColor: "lightgray" }}>


            <View style={{ marginTop: "10px"}}>
                <Text style={{ fontSize: "70px"}}>Cadastrar</Text>
            </View>

            <View>
                <Image
                    style={{width: "150px", height: "150px", marginTop: "20px"}}
                    source={{
                    uri:"https://cdn-icons-png.flaticon.com/128/2734/2734847.png"
                    }}  
                />
            </View>

            <View style={{ alignItems: "flex-start" }}>
                <Text style={{ marginTop: "30px" }}>Nome:</Text>
                <div>
                    <TextInput 
                    onChangeText={e => setNome(e)}
                    value = {nome}
                    style={{ borderRadius: "5px", backgroundColor: "white", marginBottom: "20px", width: "350px", height: "30px" }}/>
                </div>
            </View>

            <View style={{display: "flex", flexDirection: "Row"}}>

                <View style={{alignItems: "flex-start"}}>
                <Text style={{ marginTop: "10px" }}>Idade:</Text>
                    <TextInput 
                    onChangeText={e => setIdade(e)}
                    value = {idade}
                    style={{ borderRadius: "5px", backgroundColor: "white", marginBottom: "20px", width: "160px", height: "30px", marginRight: "30px"}} />
                </View>

                <View style={{alignItems: "flex-start"}}>
                <Text style={{ marginTop: "10px" }}>Sexo:</Text>
                    <TextInput 
                    onChangeText={e => setSexo(e)}
                    value = {sexo}
                    style={{ borderRadius: "5px", backgroundColor: "white", marginBottom: "20px", width: "160px", height: "30px" }}/>
                </View>

            </View>

            <View style={{ alignItems: "flex-start" }}>
                <Text style={{ marginTop: "10px" }}>Email:</Text>
                <div>
                    <TextInput 
                    onChangeText={e => setEmail(e)}
                    value = {email}
                    style={{ borderRadius: "5px", backgroundColor: "white", marginBottom: "20px", width: "350px", height: "30px" }}/>
                </div>
            </View>
            
            <View style={{ alignItems: "flex-start" }}>
                <Text style={{ marginTop: "10px" }}>Senha:</Text>
                <div>
                    <TextInput 
                    style={{ borderRadius: "5px", backgroundColor: "white", marginBottom: "20px", width: "350px", height: "30px" }}/>
                </div>

            </View>

            <View style={{ alignItems: "flex-start" }}>
                <Text style={{ marginTop: "10px" }}>Confirma Senha:</Text>
                <div>
                    <TextInput 
                    style={{ borderRadius: "5px", backgroundColor: "white", marginBottom: "20px", width: "350px", height: "30px" }}/>
                </div>
            </View>

            <View style={{ alignItems: "flex-start", width: "350px"}}>
                <Text style={{ marginTop: "10px"}}>Deseja Receber Notificação?</Text>
                <Switch
                    onValueChange ={() => setInicio(!inicio)}
                    value={inicio} 
                    trackColor = {{false: "#767577", true: "#81b0ff"}}
                    thumbColor={"#f5dd4b"}
                    activeTumbColor={"#f4f3f4"}
                    style={{backgroundColor: "white"}}
                />
            </View>

            <div>
                <TouchableOpacity
                    style={{
                        width: "200px",
                        innerHeight: "40px",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        marginTop: "25px",
                        marginBottom: "20px",
                        width: "350px",
                        height: "50px",
                        alignItems: "center",
                        justifyContent: "center"
                    }} onPress={() => goToUsuario()} >
                    <Text style={{ fontSize: "20px" }}>Cadastrar</Text>
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
                    }} onPress={() => goToUsuario()}>
                    <Text style={{ fontSize: "20px" }}>Login</Text>
                </TouchableOpacity>

            </div>
        </View>
    );

}
