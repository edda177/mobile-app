import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navigation from "./navigation/Navigation";
import { AuthProvider } from "./context/AuthContext";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NewsProvider } from "./context/NewsContext";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NewsProvider>
          <Navigation />
        </NewsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
