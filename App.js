import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navigation from "./navigation/Navigation";
import { AuthProvider } from "./context/AuthContext";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
