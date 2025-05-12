import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerItem,
  DrawerItemList,
  useDrawerProgress,
} from "@react-navigation/drawer";
import TempScreen from "../screens/TempScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createStaticNavigation,
  NavigationIndependentTree,
} from "@react-navigation/native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator({
  screens: {
    Temperature: TempScreen,
  },
});
const DrawerNav = createStaticNavigation(Drawer);

const MenuNavigation = ({ navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOnClick = () => {
    setMenuOpen(!menuOpen);

    if (menuOpen) {
      navigation.openDrawer();
    } else {
      navigation.closeDrawer();
    }
  };

  return (
    <NavigationIndependentTree>
      <Drawer.Navigator
        drawerContent={(props) => (
          <DrawerContent>
            <DrawerItemList />
            <DrawerItem></DrawerItem>
          </DrawerContent>
        )}
      >
        {/* <DrawerNav /> */}
        {/* <Drawer.Navigator
        screenOptions={{
          drawerType: "front",

          drawerPosition: "right",
          overlayColor: "blue",
        }}
      >
        <Drawer.Screen name="Temperature" component={TempScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator> */}
      </Drawer.Navigator>
    </NavigationIndependentTree>
  );
};

export default MenuNavigation;
