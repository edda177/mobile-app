import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}