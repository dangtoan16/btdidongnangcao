import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import OnbroadingScreen from "../screens/auth/OnBoarding";
import ProfileScreen from "../screens/profiles/ProfileScreen";
import HomeScreen from "../screens/home/HomeScreen";

const AuthNavigator = ()=>{
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnbroadingScreen" component={OnbroadingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> 
            <Stack.Screen name="HomeScreen" component={HomeScreen} /> 

        </Stack.Navigator>
    )
}

export default AuthNavigator;