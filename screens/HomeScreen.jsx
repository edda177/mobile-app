import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/layout/Layout";
import CardSection from "../components/CardSection";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const { theme } = useTheme(); // Get theme

  return (
    <Layout scrollable>
      <View>
        <Text style={theme.titleLarge}>Overview</Text>
        <CardSection title="Temperature" />
        <CardSection title="Humidity" />
        <CardSection title="Heart Rate" />
        <CardSection title="Steps" />
        <CardSection title="Gas" />

        <Text style={theme.titleMedium}>Lorem ipsum</Text>
        <Text style={theme.titleSmall}>Lorem ipsum</Text>
        <Text style={theme.unitLarge}>
          44<Text style={theme.unitSmall}> %</Text>
        </Text>
        <Text style={theme.textBody}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, fugit
          voluptatem perferendis temporibus consectetur quibusdam veritatis.
          Aperiam voluptates similique debitis.
        </Text>
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
