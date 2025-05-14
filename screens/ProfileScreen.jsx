import { StyleSheet, Image, Text, View, Switch } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/layout/Layout";

const ProfileScreen = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Layout scrollable>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/profile-example.jpg")}
          style={styles.profileimg}
        />
        <Text style={theme.textStyles.titleMedium} accessibilityRole="header">
          Maggie Pearson
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          padding: 20,
        }}
      >
        <Text style={[theme.textStyles.titleLarge]}>Profile</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: theme.colors.heading, marginBottom: 8 }}>
            Dark Mode
          </Text>
          <Switch value={theme.mode === "dark"} onValueChange={toggleTheme} />
        </View>
      </View>
    </Layout>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  profileimg: {
    borderColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    height: 150,
    marginBottom: 16,
    width: 150,
  },
});
