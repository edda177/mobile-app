import { Pressable, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";
import NewsCard from "./NewsCard";
import { useState } from "react";

const CardSection = ({ title, prevTitle, route, arrow = true }) => {
  console.log(title, route);
  const { theme } = useTheme(); // Get theme
  const [news, setNews] = useState([]);
  const navigations = useNavigation();
  let category = "";
  const { stackTitle } = route ? route.params : {};
  if (title !== undefined || null) {
    category = title.replaceAll(" ", "_");
  }
  if (stackTitle !== undefined) {
    category = stackTitle.replaceAll(" ", "_");
  }

  if (news == "") {
    const data = require("../data/news.json");
    setNews(data);
  }
  const singleNews = news.find((item) => item.heading === title);
  return (
    <View accessible={true} style={{ flex: 1, gap: 16 }}>
      {prevTitle === undefined && (
        <Text
          style={
            title === "News"
              ? theme.textStyles.titleLarge
              : theme.textStyles.titleMedium
          }
          accessibilityRole="header"
        >
          {title}
        </Text>
      )}

      {prevTitle === "News" && (
        <NewsCard item={singleNews} arrow={false} showMore={true} />
      )}
      {title === "News" &&
        news.map((item) => (
          <Pressable
            key={item.id}
            accessibilityRole="link"
            accessibilityLabel={`Link to ${item.heading} page`}
            accessibilityHint={`Go to ${item.heading} page for more information`}
            onPress={() =>
              navigations.navigate("DataScreen", {
                stackTitle: item.heading,
                prevTitle: title,
              })
            }
          >
            <NewsCard item={item} arrow={arrow} showMore={false} />
          </Pressable>
        ))}
      {title !== "News" && prevTitle !== "News" && (
        <Pressable
          accessibilityRole="link"
          accessibilityLabel={`Link to ${
            title !== undefined ? title : stackTitle
          } page`}
          accessibilityHint={`Go to ${
            title ? title : stackTitle
          } page for more information`}
          onPress={() =>
            navigations.navigate("DataScreen", {
              stackTitle: title !== undefined ? title : stackTitle,
            })
          }
        >
          <Card title={category.toLowerCase()} arrow={arrow} />
        </Pressable>
      )}
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({});
