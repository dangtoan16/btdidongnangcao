
import { StatusBar, Text, View } from "react-native";
import React from "react";
import AppRouter from "./src/navigators/AppRouter";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import SplashScreen from "./src/screens/SplashScreen";
import AuthNavigator from "./src/navigators/AuthNavigator";
import MainNavigator from "./src/navigators/MainNavigator";
import { Provider, useSelector } from "react-redux";
import { authSelector } from "./src/reduxs/reducers/authReducers";
import store from "./src/reduxs/store";
const App = ()=>{
 
  return (
    <>
    <Provider store={store}>
        <StatusBar
          barStyle={'dark-content'}
          translucent
          backgroundColor={'transparent'}/>
          <AppRouter />
      </Provider>
    </>
  )
}
export default App;