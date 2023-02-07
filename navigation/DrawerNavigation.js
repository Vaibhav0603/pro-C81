import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {CreateDrawerNavigator} from ' react-navigation/drawer';
 import TabNavigator from ".TabNavigator";
 import Profile from "../screens/Profile";

 const Drawer = CreateDrawerNavigator();

 const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
        <Drawer.Screen name= "Home" component={TabNavigator}/>
        <Drawer.Screen name="Profile" component= {Profile}/>
        </Drawer.Navigator>
    )
 };

 export default DrawerNavigator;