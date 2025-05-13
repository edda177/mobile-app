import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './navigation/Navigation';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
      <Navigation />
      </AuthProvider>
    </ThemeProvider>
  );
}