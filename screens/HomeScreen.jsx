import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/layout/Layout";
import CardSection from "../components/CardSection";
import { LayoutAnimation } from 'react-native';

const HomeScreen = () => {
  const { theme } = useTheme(); // Get theme

  // Föra smoother layout-transition
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, []);

  return (
    <Layout scrollable>
      <View>
        <Text style={theme.textStyles.titleLarge} accessibilityRole="header">
          Overview
        </Text>
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
