import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Login} from "./Login";
import {Cadastro} from "./Cadastro";
import {Usuario} from "./Usuario";


export default function App(){
  const Stack = createStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options = {{headerShown: false}} name="Cadastro" component={Cadastro} />
        <Stack.Screen options = {{headerShown: false}} name="Usuario" component={Usuario} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
