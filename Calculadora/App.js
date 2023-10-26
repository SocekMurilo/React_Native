import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Calculadora} from "./Calculadora";
import {Historico} from "./Historico";
import {UtilsContexto} from './Context'
import { useState } from 'react';


export default function App(){
  const [utils, setUtils] = useState({})
  const Stack = createStackNavigator()

  return(
    <NavigationContainer>
      <UtilsContexto.Provider value={{utils, setUtils}}>
      <Stack.Navigator>
        <Stack.Screen options = {{headerShown: false}} name="Calculadora1" component={Calculadora} />
        <Stack.Screen options = {{headerShown: false}} name="Historico" component={Historico} />
      </Stack.Navigator>
      </UtilsContexto.Provider>
    </NavigationContainer>
  )
}
