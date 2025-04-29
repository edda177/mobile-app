import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";

const CardSection = ({ title }) => {
  const { theme } = useTheme(); // Get theme
  const category = title.replaceAll(" ", "_");
  const navigation = useNavigation();
  return (
    <View>
      <Text style={theme.textStyles.titleMedium}>{title}</Text>
      <Pressable onPress={() => navigation.navigate("Temperature")}>
        <Card title={category.toLowerCase()} />
      </Pressable>
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({});
