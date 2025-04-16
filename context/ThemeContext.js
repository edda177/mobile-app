import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

const theme = {
  colors: {
    background: '#d9d9d9',
    primary: '#0066cc',
    secondary: '#ff4081',
    text: '#333',
    border: '#dddddd',
  },
  fonts: {
    heading: 44,
    body: 16,
    small: 14,
    family: 'System',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  textBody: {
    marginBottom: 8,
    color: '#333',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },
  titleLarge: {
    marginBottom: 8,
    color: '#333',
    fontSize: 28,
    fontWeight: '700',
  },
  titleMedium: {
    marginBottom: 8,
    color: '#333',
    fontSize: 20,
    fontWeight: '700',
  },
 titleSmall: {
   marginBottom: 2,
    color: '#333',
    fontSize: 16,
    fontWeight: '700',
  },
  titleMeta: {
    marginBottom: 2,
    color: '#666',
    fontSize: 16,
    letterSpacing: 0.5,
   },
   unitLarge: {
    marginBottom: 2,
    color: '#333',
    fontSize: 40,
    letterSpacing: 0.5,
    fontWeight: '900',
   },
    unitSmall: {
      marginBottom: 2,
      color: '#333',
      fontSize: 24,
      fontWeight: '600',
   },
};

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
