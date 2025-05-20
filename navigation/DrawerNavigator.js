import { View, Text, Pressable, Platform, StatusBar } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DataScreen from "../screens/DataScreen";
import { DataStackNavigator, HomeStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import { Image } from "react-native-svg";
import Logo from "../components/Logo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

const Drawer = createDrawerNavigator();

const screenList = [
  "Temperature",
  "Humidity",
  "Heart rate",
  "Steps",
  "Gas",
  "Noise level",
];

const DrawerNavigator = () => {
  const { theme } = useTheme();
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "right",
          drawerType: "front",
          swipeEnabled: true,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          drawerStyle: {
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          },
          drawerContentStyle: {
            backgroundColor: theme.colors.background,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          },
          drawerActiveBackgroundColor: theme.colors.snow,
          drawerActiveTintColor: theme.colors.heading,
          drawerInactiveTintColor: theme.colors.heading,
          headerTitleStyle: {
            display: "none",
          },
          headerTintColor: theme.colors.tabicon,
        }}
      >
        <Drawer.Screen
          name="Sentinel"
          component={TabNavigator}
          options={{
            popToTopOnBlur: true,
            drawerItemStyle: {
              display: "none",
            },

            headerTitle: () => {
              return (
                <View>
                  <Logo width={140} height={34} color={theme.colors.tabicon} />
                </View>
              );
            },
          }}
        />
        {screenList.map((item, index) => (
          <Drawer.Screen
            key={index}
            name={item}
            component={DataScreen}
            initialParams={{ stackTitle: item }}
            options={{
              headerTitle: () => {
                return (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Logo
                      width={140}
                      height={34}
                      color={theme.colors.tabicon}
                    />
                  </View>
                );
              },
            }}
          />
        ))}
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
