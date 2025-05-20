import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/layout/Layout";
import CardSection from "../components/CardSection";
import dataList from "../utils/dataList.js";

const HomeScreen = () => {
  const { theme } = useTheme(); // Get theme

  return (
    <Layout scrollable>
      <Text style={theme.textStyles.titleLarge} accessibilityRole="header">
        Overview
      </Text>
      {dataList.map((item) => (
        <CardSection key={item} title={item} />
      ))}
    </Layout>
  );
};

export default HomeScreen;
