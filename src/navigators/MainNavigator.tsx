import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profiles/ProfileScreen";

const MainNavigator = ()=>{
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator;