import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuNavigation from "../navigation/MenuNavigation";
import { Image } from "react-native";
import { FeImage } from "react-native-svg";
import { DrawerItem } from "@react-navigation/drawer";

const Menu = ({ navigation }) => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <>
      <View
        style={{
          height: 56,
          width: "100%",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Sentinel</Text>

        <Pressable
          onPress={() => {
            setShowMenu(!showMenu);
            console.log(showMenu);
          }}
        >
          <MaterialCommunityIcons size={24} name="menu" />
        </Pressable>
      </View>
      <MenuNavigation show={showMenu} />
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({});
