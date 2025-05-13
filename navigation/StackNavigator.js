import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DataScreen from "../screens/DataScreen";
import TestScreen from "../screens/TestScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = ({ route }) => {
  const { title } = route.params || {};

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "lightgreen",
        },
        headerTitle: title,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Back"
        component={DataScreen}
        initialParams={{ title: title }}
      />
    </Stack.Navigator>
  );
};

const NewsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "lightgreen",
        },
      }}

      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Newss" component={NewsScreen} />
    </Stack.Navigator>
  );
};

const TestStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "lightgreen",
        },
      }}

      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Testing" component={TestScreen} />
    </Stack.Navigator>
  );
};

const StatStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "lightgreen",
        },
      }}

      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Statistics" component={TestScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "lightgreen",
        },
      }}

      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "lightgreen",
        },
      }}

      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const DataStackNavigator = ({ route }) => {
  const { stackTitle } = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Data"
        component={DataScreen}
        initialParams={{ stackTitle: stackTitle }}
      />
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
  DataStackNavigator,
};
