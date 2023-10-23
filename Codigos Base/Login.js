import { Text, Button } from "react-native";

export function Login(props){
    return(
        <>
        <Text> Coritiba </Text>
        <Button title="Cadastro" onPress={() => props.navigation.navigate("Cadastro")}></Button>
        </>
    )
    ;
}
