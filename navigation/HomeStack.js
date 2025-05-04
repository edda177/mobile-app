import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import TempScreen from "../screens/TempScreen";
import LoginFormScreen from "../screens/LoginFormScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Newss" component={HomeScreen} />
      <Stack.Screen name="Temperature" component={TempScreen} />
      <Stack.Screen name="Profile" component={HomeScreen} />
      <Stack.Screen name="Statistics" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginFormScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

/* Med denna lösning kan HomeScreen navigera till Temperature och 
tabbarna i BottomNavigation försvinner inte. */