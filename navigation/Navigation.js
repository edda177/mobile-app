import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import HomeStack from "./HomeStack";
import HomeScreen from "../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";
import LoginFormScreen from "../screens/LoginFormScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colors.primary,
            height: 80,
          },
          tabBarIconStyle: { marginTop: 8 },
          tabBarLabelStyle: { marginBottom: 12, fontSize: 12 },

          // We use colors.icon depending on theme
          tabBarActiveTintColor: theme.colors.tabicon,
          tabBarInactiveTintColor: theme.colors.tabicon,

          /* Om vi vill att aktiva ikoner ska vara en annan färg än inaktiva */
          // tabBarActiveTintColor: theme.colors.icon,
          // tabBarInactiveTintColor: theme.mode === 'dark' ? '#aaa' : '#666',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            //headerShown: true,
          }}
        />
        <Tab.Screen
          name="News"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="newspaper-variant" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Testing"
          component={TestScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="test-tube" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-line"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Login"
          component={LoginFormScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login-variant" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;