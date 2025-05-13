import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DataScreen from "../screens/DataScreen";
import TestScreen from "../screens/TestScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Data" component={DataScreen} />
    </Stack.Navigator>
  );
};

const NewsStackNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Newss" component={NewsScreen} />
    </Stack.Navigator>
  );
};

const TestStackNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Testing" component={TestScreen} />
    </Stack.Navigator>
  );
};

const StatStackNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Testing" component={TestScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  NewsStackNavigator,
  TestStackNavigator,
  StatStackNavigator,
  ProfileStackNavigator,
  LoginStackNavigator,
};
