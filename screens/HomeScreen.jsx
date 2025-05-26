import { useEffect } from "react";
import { StyleSheet, Text, View, LayoutAnimation } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/layout/Layout";
import CardSection from "../components/CardSection";
import dataList from "../utils/dataList.js";
import WarningCard from "../components/WarningCard";
//import { LayoutAnimation } from "react-native";

const HomeScreen = () => {
  const { theme } = useTheme(); // Get theme

  // Layout-animation
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, []);

  // Sensorvärden – kan bytas mot API senare
  const sensorData = {
    temperature: 28,
    steps: 6200,
    heartRate: 85,
    gasLevel: 2,
    noiseLevel: 85,
  };

  const notifications = [];

  if (sensorData.temperature > 26) notifications.push("heat");
  if (sensorData.steps > 6000) notifications.push("steps");
  if (sensorData.heartRate > 125) notifications.push("heartrate");
  if (sensorData.noiseLevel > 70) notifications.push("noise");
  if (sensorData.gasLevel >= 2) notifications.push("gas");

  if (notifications.length === 0) notifications.push("default");

  const randomIndex = Math.floor(Math.random() * notifications.length);
  const selectedNotification = notifications[randomIndex];

  return (
    <Layout scrollable>
      <Text style={theme.textStyles.titleLarge} accessibilityRole="header">
        Overview
      </Text>

      {/* Visa ett slumpmässigt varningskort */}
      <WarningCard type={selectedNotification} />

      {/* Data-sektioner */}
      {dataList.map((item) => (
        <CardSection key={item} title={item} />
      ))}
    </Layout>
  );
};

export default HomeScreen;
