import { StatusBar } from 'expo-status-bar';

import{ useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, SectionList, Switch} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Login} from "./Login";
import Cadastro from "./Cadastro";

export default function App(){
  const Stack = createStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {

  const [senha, setSenha] = useState("Teste")
  const [inicio, setInicio] = useState(false)

  const array = ["numero 1", "numero 2"]
  const array2 = [{
    title:"Main dishes",
    data: ['Pizza', 'Burguer'],
  },{
    title:"Teste",
    data: ['Pizza', 'Burguer'],
  }]

  function handlerChange(e){
    console.log("valor senha", e.target.value)
  }

    <View style={styles.container}>
      <Switch
        onValueChange ={() => setInicio(!inicio)}
        value={inicio} 
        trackColor = {{false: "#767577", true: "#81b0ff"}}
        thumbColor={"#f5dd4b"}
        activeTumbColor={"#f4f3f4"} 
      />
      <SectionList
        sections = {array2}
        keyEstractor = {(item, index) => item+index} 
        renderItem = {({item}) => (
          <Text style = {{color: "green"}}> item-index</Text>
        )}
        renderSectionHeader = {({section: {title}}) => (
          <Text style = {{color: "blue"}}> item-index</Text>
        )}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        secureTextEntry={true}
        placeholder = "Escreva sua Senha"
        value={senha}
        onChangeText={e => setSenha(e)}
      />
      <Text>{senha}</Text>
      <TextInput
        multiline
        maxLength={40}
        numberOfLines={5}
        style={styles.textArea}
        onChangeText={e => console.log('text area', e)}
      />
      <Button
        onPress={() => console.log("FUI pressionado")}
        title="ME CLIQUE"
        color={"#841584"}
      ></Button>
      <TouchableOpacity
        style = {{
          width:"200px",
          innerHeight:"40px",
          backgroundColor:"gray"
        }}>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => console.log("withou feedback")}>
        <View style={{
          width:"200px",
          innerHeight:"40px",
          backgroundColor:"black",
          color:"white"
        }}>
            <Text style={{color:"white"}}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <Image
        style={styles.logo}
        source={{
          uri:"https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2020/09/01/1584147355038.jpg"
        }}  
      />
      {array.map((item) => {
        return(
          <Text>{item}</Text>
        )
      })}
      <FlatList 
        data={array}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  ;
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    backgroundColor: 'black',
    color: 'white',
  },
  logo:{
    width:"200px",
    height:"200px"
  }
});

