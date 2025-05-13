import { View, Text, Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeStackNavigator,
  NewsStackNavigator,
  TestStackNavigator,
  StatStackNavigator,
  ProfileStackNavigator,
  LoginStackNavigator,
} from "./StackNavigator";
import { useTheme } from "../context/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { theme } = useTheme();
  const notification = 3;
  return (
    <Tab.Navigator
      screenOptions={{
        // title: "Sentinel",

        headerRightContainerStyle: {
          padding: 16,
        },
        // headerShown: false, // Dölj headern för alla Tab.Screen
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          height: 80,
        },
        tabBarIconStyle: { marginTop: 8 },
        tabBarLabelStyle: { marginBottom: 12, fontSize: 12 },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={({ navigation }) => ({
          // går tillbaka till första sidan istället för att vara på undersidan när man kommer tillbaka från annan bottomtab
          popToTopOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          // News-knappen i headern:
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Testing")}>
              <Text>News</Text>
              <MaterialCommunityIcons
                name="numeric-3-circle"
                color={theme.colors.warning}
                size={18}
              />
            </Pressable>
          ),
          // notis på hem-tabben:
          tabBarBadge: notification,
        })}
      />
      <Tab.Screen
        name="Newss"
        component={NewsStackNavigator}
        options={({ color, navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper-variant"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
          // headerRight: () => (
          //   <View>
          //     <Pressable onPress={() => setMenuOpen(!menuOpen)}>
          //       <MaterialCommunityIcons name="menu" size={24} color={color} />
          //     </Pressable>

          //   </View>
          // ),
        })}
      />
      <Tab.Screen
        name="Testing"
        component={TestStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="test-tube"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-line"
              color={"#fff"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="login-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
