import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Weather from "../screens/Weather";
import Settings from "../screens/Setting";
const Tab = createBottomTabNavigator();

const TabBottom = ()=>{
    return(
    <Tab.Navigator 
      
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
            position: 'absolute',
            height: 54,
            
        },
        tabBarActiveTintColor: '#00BFFF',
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
        }
      }} >
        <Tab.Screen 

          options={{
              tabBarIcon: ({color})=><Icon name="thermometer-outline" color={color} size={26}/>,
              
          }} 
          name="Weather"  component={Weather} />
        <Tab.Screen 
          options={{
              tabBarIcon: ({color})=><Icon name="settings-outline" color={color} size={26}/>,
          }} 
          name="Settings" component={Settings} />
    </Tab.Navigator>
    )
}

export default TabBottom;