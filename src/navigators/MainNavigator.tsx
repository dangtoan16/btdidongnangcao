import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import SplashScreen from "../screens/SplashScreen";
import ProfileScreen from "../screens/profiles/ProfileScreen";
import HomeScreen from "../screens/home/HomeScreen";
import LazyLoadingScreen from "../screens/auth/components/LazyLoadingScreen";


const MainNavigator = ()=>{
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="LazyLoadingScreen" component={LazyLoadingScreen} />

        </Stack.Navigator>
    )
}

export default MainNavigator;