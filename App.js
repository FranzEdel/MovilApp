import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home'
import CreateEmployee from './screens/CreateEmployee'

import Contants from 'expo-constants';
import CreateEmployye from './screens/CreateEmployee';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <CreateEmployye />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeced',
    marginTop:Contants.statusBarHeight,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
