import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DataScreen from "../screens/DataScreen";
import { DataStackNavigator, HomeStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

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
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: "right",
        drawerType: "back",
        headerStyle: {
          backgroundColor: "lightpink",
        },
      }}
    >
      <Drawer.Screen
        name="Sentinel"
        component={TabNavigator}
        options={{
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
      {screenList.map((item, index) => (
        <Drawer.Screen
          key={index}
          name={item}
          component={DataStackNavigator}
          initialParams={{ stackTitle: item }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
