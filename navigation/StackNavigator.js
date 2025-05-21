//import { useTheme } from "../context/ThemeContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import NewsScreen from "../screens/NewsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DataScreen from "../screens/DataScreen";
import LoginFormScreen from "../screens/LoginFormScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = ({ route }) => {
  const { title } = route.params || {};

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="DataScreen"
        component={DataScreen}
        initialParams={{ title: title }}
      />
    </Stack.Navigator>
  );
};

const NewsStackNavigator = ({ route }) => {
  const { title } = route.params || {};
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen
        name="DataScreen"
        component={DataScreen}
        initialParams={{ title: title }}
      />
    </Stack.Navigator>
  );
};

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const StatStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Statistics" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const LoginStackNavigator = () => {
  //const { theme, toggleTheme } = useTheme(); // Get theme
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginFormScreen} />
    </Stack.Navigator>
  );
};

const DataStackNavigator = ({ route }) => {
  const { stackTitle } = route.params;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
  SettingsStackNavigator,
  StatStackNavigator,
  ProfileStackNavigator,
  LoginStackNavigator,
  DataStackNavigator,
};
