import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor:'skyblue'
      }}
    >
      <Tab.Screen 
      name="HomeScreen"
      component={HomeScreen} 
      options={{
        title:'',
        tabBarIcon: () => <Ionicons size={20} name="chatbox"/>
      }}

      />
      <Tab.Screen 
      name="ProfileScreen" 
      component={ProfileScreen} 
      options={{
        title:'',
        tabBarIcon: () => <FontAwesome size={20} name="user"/>
      }}
      
      />
    </Tab.Navigator>
    )
}

export default BottomTabNavigator

const style = StyleSheet.create({})