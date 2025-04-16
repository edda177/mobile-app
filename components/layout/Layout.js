import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function Layout({ children, scrollable = false, style }) {
  const { theme } = useTheme();

  const Container = scrollable ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <Container
        contentContainerStyle={scrollable && styles.scrollContainer}
        style={[styles.inner, style]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
});

/* Fördelar med att lägga SafeAreaView i App.js eller i en layout-fil:
Du slipper upprepa den på varje screen.
Du kan styra padding, bakgrundsfärg, etc. centralt.
Ger en konsekvent struktur i hela appen.
Det gör koden i dina skärmar renare och mer fokuserad på innehållet. 
*/