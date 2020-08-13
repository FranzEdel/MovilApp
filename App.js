import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';

import Contants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const myOptions = {
  title:'Inicio',
  headerTintColor:'white',
  headerStyle:{
    backgroundColor:'#006aff'
  }
}

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={ myOptions } 
        />
        <Stack.Screen 
        name="CreateEmployee" 
        component={CreateEmployee} 
        options={{...myOptions,title:'Crear nuevo Empleado'}} 
        />
        <Stack.Screen 
        name="Profile" 
        component={Profile} 
        options={{...myOptions,title:'Perfil'}} 
        />
      </Stack.Navigator>

      {/* <Home /> */}
      {/* <CreateEmployee /> */}
      {/* <Profile /> */}

      <StatusBar style="auto" />
    </View>
  );
}

export default ()=>{
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeced',
    //marginTop:Contants.statusBarHeight,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
