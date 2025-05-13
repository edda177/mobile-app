import { View, Text, Pressable } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DataScreen from "../screens/DataScreen";
import { DataStackNavigator, HomeStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import { Image } from "react-native-svg";

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
    <>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "right",
          drawerType: "back",
          headerStyle: {
            backgroundColor: "lightpink",
          },
          headerTitleStyle: {
            display: "none",
          },
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
            headerLeft: () => {
              return (
                <View>
                  <Image source={require("../assets/logo.svg")} />
                  <Text>Sentinel</Text>
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
            options={({ navigation }) => ({
              headerLeft: () => {
                return (
                  <Pressable onPress={() => navigation.navigate("Sentinel")}>
                    <Image source={require("../assets/logo.svg")} />
                    <Text>Sentinel</Text>
                  </Pressable>
                );
              },
            })}
          />
        ))}
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
