import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";

const CardSection = ({ title, route, arrow = true }) => {
  const { theme } = useTheme(); // Get theme

  const navigations = useNavigation();
  let category = "";
  const { stackTitle } = route ? route.params : {};
  if (title !== undefined || null) {
    category = title.replaceAll(" ", "_");
    console.log("Title from homepage: ", title);
  }
  if (stackTitle !== undefined) {
    category = stackTitle.replaceAll(" ", "_");
    console.log("Title from stackparams: ", stackTitle);
  }
  console.log(category);
  return (
    <View accessible={true}>
      <Text style={theme.textStyles.titleMedium} accessibilityRole="header">
        {title}
      </Text>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={`Link to ${
          title !== undefined ? title : stackTitle
        } page`}
        accessibilityHint={`Go to ${
          title ? title : stackTitle
        } page for more information`}
        onPress={() =>
          navigations.navigate("Back", {
            stackTitle: title !== undefined ? title : stackTitle,
          })
        }
      >
        <Card title={category.toLowerCase()} arrow={arrow} />
      </Pressable>
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({});
