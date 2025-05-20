import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewsCard = ({ item, arrow, showMore }) => {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, gap: 16 }}>
      <View
        key={item.id}
        style={{
          backgroundColor: theme.colors.snow,
          borderRadius: theme.radius.lg,
          paddingHorizontal: 16,
          paddingVertical: 16,
          flex: 1,
          gap: 10,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: "100%",
            height: 280,
            borderRadius: theme.radius.lg,
          }}
          resizeMode="cover"
        />
        <Text style={theme.textStyles.titleMedium}>{item.heading}</Text>
        {showMore ? (
          <Text style={theme.textStyles.textBody}>{item.message}</Text>
        ) : (
          <Text style={theme.textStyles.textBody} numberOfLines={1}>
            {item.message}...
          </Text>
        )}
        <View style={{ alignItems: "flex-end" }}>
          {arrow && (
            <MaterialCommunityIcons
              name="chevron-right"
              color={theme.colors.accent}
              size={24}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({});
