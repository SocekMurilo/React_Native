import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Calculadora} from "./Calculadora";
import {Historico} from "./Historico";


export default function App(){
  const Stack = createStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options = {{headerShown: false}} name="Calculadora" component={Calculadora} />
        <Stack.Screen options = {{headerShown: false}} name="Historico" component={Historico} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
