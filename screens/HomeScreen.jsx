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
        <Text style={theme.textStyles.titleLarge}>Overview</Text>
        <CardSection title="Temperature" />
        <CardSection title="Humidity" />
        <CardSection title="Heart rate" />
        <CardSection title="Steps" />
        <CardSection title="Gas" />
        <CardSection title="Noise level" />
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
