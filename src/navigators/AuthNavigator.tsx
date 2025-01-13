import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen, } from '../screens';
import OnboardingScreen from '../screens/auth/OnBoarding';

const AuthNavigator = () => {
  // Tạo một navigator kiểu stack
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Màn hình giới thiệu */}
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      {/* Màn hình đăng nhập */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
