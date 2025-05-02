import React, { createContext, useContext } from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

/* Struktur med separata blocks och återanvändning - för större appar / team / design systems.
Då är det ofta bättre att organisera temat hierarkiskt och separat.
Fördelar med detta:
Alla styles är återanvändbara och tydligt uppdelade.
Vi kan lätt utöka med fler komponenter (t.ex. button, input, osv.).
Lättare att tematisera om hela appen eller införa dark mode längre fram.
Vi får fortfarande tillgång till allt via const { theme } = useTheme();.
*/

// Colors
const colors = {
  background: '#D5E2E2',
  primary: '#204054',
  secondary: '#bbb',
  accent: '#46D2CA',
  warning: '#F26627',
  text: '#204054',
  border: '#fff',
  muted: '#666',
  snow: '#fff',
};

// Fonts
const fonts = {
  heading: 44,
  body: 16,
  small: 14,
  family: 'Georgia',
};

// Spacing
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// Radius
const radius = {
  sm: 4,
  md: 8,
  lg: 16,
};

const fontStyles = {
  system: require("../assets/fonts/Quicksand-Regular.ttf"),
  light: { fontFamily: "Quicksand-Light", fontWeight: "300"},
  regular: { fontFamily: "Quicksand-Regular", fontWeight: "400"}, 
  medium: { fontFamily: "Quicksand-Medium", fontWeight: "500"},
  semibold: { fontFamily: "Quicksand-SemiBold", fontWeight: "600"},
  bold: { fontFamily: "Quicksand-Bold", fontWeight: "700"},
};

// Text styles
const textStyles = {
  textBody: {
    marginBottom: spacing.sm,
    color: colors.text,
    fontFamily: 'Quicksand-Regular',
    fontSize: fonts.body,
    lineHeight: 22,
  },
  titleLarge: {
    marginBottom: spacing.sm,
    color: colors.text,
    fontFamily: 'Quicksand-Bold',
    fontSize: 28,
  },
  titleMedium: {
    marginBottom: spacing.sm,
    color: colors.text,
    fontFamily: 'Quicksand-Bold',
    fontSize: 20,
  },
  titleSmall: {
    marginBottom: spacing.xs,
    color: colors.text,
    fontFamily: 'Quicksand-Bold',
    fontSize: fonts.body,
    fontWeight: '700',
  },
  titleMeta: {
    marginBottom: spacing.xs,
    color: colors.muted,
    fontFamily: 'Quicksand-Bold',
    fontSize: fonts.body,
  },
  unitLarge: {
    //marginBottom: spacing.xs,
    color: colors.text,
    fontSize: 40,
    letterSpacing: 0.5,
    fontFamily: 'Quicksand-Bold',
  },
  unitSmall: {
    //marginBottom: spacing.xs,
    color: colors.text,
    fontSize: 24,
    fontFamily: 'Quicksand-Bold',
  },
};

// Component styles

/* React Native används JavaScript-objekt för att definiera stilar,
och värden måste vara strängar om de inte är nummer eller variabelreferenser. 
Så "flex" och "space-between" måste skrivas som strängar. */
const components = {
  card: {
    alignItems: "center", // För vertikal centering
    backgroundColor: colors.snow,
    borderRadius: radius.md,
    display: "flex", //display: "flex" är överflödigt i React Native, eftersom flex är standard på alla View-komponenter
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.md,
    padding: spacing.sm,
  },
  cardWarning: {
    //borderLeftWidth: 8,
    //alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 16,
    overflow: "hidden",
    paddingRight: 16,
    //paddingVertical: 12,
  },
  cardStripe: {
    width: 6,
    backgroundColor: "red",
    borderTopLeftRadius: radius.md,
    borderBottomLeftRadius: radius.md,
    height: "100%",
    //width: 0, // Använder borderLeft istället
  },
  icon: {
    //marginHorizontal: 12,
    alignSelf: "center",
    // borderWidth: 2,
    // borderColor: "red",
    paddingHorizontal: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 4,
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
    color: "#444",
    paddingVertical: 12,
  },
};

const rows = {
  row: {
    //flexDirection: "column",
    justifyContent: "space-between",
  },
};

const theme = {
  colors,
  fonts,
  spacing,
  radius,
  textStyles,
  ...components, // Direct access to for example theme.card 
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <View><Text>Loading font....</Text></View>
  }

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

/*
Förklaring font:

Vår font laddas via via useFonts.
För att fonten faktiskt ska kunna används i våra textStyles måste vi ange fontFamily i textstilerna.

I React Native (särskilt med egna fonter i Expo) måste vi manuellt ange fontFamily, 
eftersom enbart fontWeight inte fungerar tillsammans med anpassade fonter om vi inte skapar en variant per vikt.
*/