import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";

const CardSection = ({ title, arrow = true }) => {
  const { theme } = useTheme(); // Get theme
  const category = title.replaceAll(" ", "_");
  const navigation = useNavigation();
  return (
    <View accessible={true}>
      <Text style={theme.textStyles.titleMedium} accessibilityRole="header">
        {title}
      </Text>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={`Link to ${title} page`}
        accessibilityHint={`Go to ${title} page for more information`}
        onPress={() => navigation.navigate("Data", { title: title })}
      >
        <Card title={category.toLowerCase()} arrow={arrow} />
      </Pressable>
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({});
