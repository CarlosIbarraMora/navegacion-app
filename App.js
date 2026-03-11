import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = "Login"
        screenOptions = {{
          headerStyle : {
            backgroundColor : '#FDB813'
          },
          headerTintColor : '#000000',
          headerTitleStyle : {
            fontWeight : 'bold',
          }
        }}
        >

        <Stack.Screen
          name = "Login"
          component = {LoginScreen}
          options = {{
            title : 'Iniciar Sesion',
            headerShown : false
          }}
        />

        <Stack.Screen 
          name = "Home"
          component = {HomeScreen}
          options = {{
            title : 'Inicio',
            headerBackInvisible : false
          }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}