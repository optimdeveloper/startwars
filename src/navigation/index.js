import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Splash from "../components/splash/Splash";
import { navigationRef } from "./RootNavigation";
import Measurement from "../components/home/Measurement";
import Subscriptions from "../components/splash/Subscriptions";
import MeasurementHistory from "../components/home/MeasurementHistory";
import Home from "../components/home/Home";

const Stack = createStackNavigator();

export default AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none" initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Measurement" component={Measurement} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
