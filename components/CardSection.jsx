import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Card from "./Card";

const CardSection = ({ title }) => {
  const { theme } = useTheme(); // Get theme
  const category = title.replaceAll(" ", "_");
  return (
    <View>
      <Text style={theme.textStyles.titleMedium}>{title}</Text>
      <Card title={category.toLowerCase()} />
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({});
