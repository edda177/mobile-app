import { StyleSheet, Image, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/layout/Layout";
import ProfileInfo from "../components/ProfileInfo";

const ProfileScreen = () => {
  const { theme, toggleTheme } = useTheme(); //  theme: ett objekt som innehåller colors, textStyles m.m och även ett mode - light eller dark
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
        }}
      >
       
      <ProfileInfo />

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

// {/* <Text style={{ color: theme.colors.heading, marginBottom: 8 }}>
//   Dark Mode
// </Text> */}

//  {/* Switchknappen visar om mörkt läge är aktivt.
//   När man trycker på den, körs toggleTheme och byter till motsatt läge.
//   Då ändras färger och stilar i hela appen via theme .
// */}
// {/* <Switch 
// value={theme.mode === "dark"} // Om appens tema är "dark", visa att switchen är på, annars visa att switchen är av (ljusläge är aktivt)
// onValueChange={toggleTheme} 
// accessibilityLabel="Activate dark mode or light mode"
// />     */}

// {/* <ThemeSwitch
//   isOn={theme.mode === "dark"} // Om temat är mörkt, visa att switchen är på
//   onToggle={toggleTheme}        // Kör funktionen för att växla tema
// /> */}