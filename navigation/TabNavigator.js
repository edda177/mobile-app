import { View, Text, Pressable, Platform } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeStackNavigator,
  NewsStackNavigator,
  SettingsStackNavigator,
  StatStackNavigator,
  ProfileStackNavigator,
} from "./StackNavigator";
import { useTheme } from "../context/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { getNotWatched } from "../utils/notWatchedNews";
import { useNotWatched } from "../context/NewsContext";
// Behåll även om den är utgråad! - for now
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();
// Funktion för att kunna börja om att visa nyhets-notiserna
// AsyncStorage.removeItem("NotWatched");
const TabNavigator = () => {
  const { badgeNumber } = useNotWatched();
  const { theme } = useTheme();

  useEffect(() => {
    const asynFunc = async () => {
      const result = await getNotWatched();
    };
    asynFunc();
  }, []);

  return (
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
        component={HomeStackNavigator}
        options={({ navigation }) => ({
          // går tillbaka till första sidan istället för att vara på undersidan när man kommer tillbaka från annan bottomtab
          popToTopOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="News"
        component={NewsStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper-variant"
              color={color}
              size={size}
            />
          ),
          // notis på news-tabben
          tabBarBadge: badgeNumber !== 0 ? badgeNumber : undefined,
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-line"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
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
      </Tab.Navigator>
  );
};

export default TabNavigator;
