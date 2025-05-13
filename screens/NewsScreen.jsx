import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/layout/Layout";
import MenuNavigation from "../navigation/MenuNavigation";
import Menu from "../components/Menu";

const NewsScreen = () => {
  return (
    <Layout scrollable>
      {/* <Menu /> */}
      <View>
        <Text>NewsScreen</Text>
      </View>
    </Layout>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});
