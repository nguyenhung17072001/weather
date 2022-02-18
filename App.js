import React, {useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabBottom from './assets/components/navigation/TabBottom';


export default function App() {
  
  return (
    <NavigationContainer  >
      <TabBottom />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
