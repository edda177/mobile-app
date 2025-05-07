import { useTheme } from '../context/ThemeContext';
import Layout from "../components/layout/Layout";
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import { useAuth } from '../context/AuthContext'; // Använder AuthContext

const LoginFormScreen = () => {

    const { theme } = useTheme(); // Get theme

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Hämta login-funktionen från context
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        setError(null);
        try {
        await login(username, password);
        // Om login lyckas händer inget mer här direkt, men token är nu sparad
        } catch (err) {
        setError('Login failed. Please check your credentials.');
        }
    };

  return (
        <Layout scrollable>
            <View style={styles.container}>
              <Text style={theme.textStyles.titleLarge} accessibilityRole="header">Login</Text>
              <Text style={theme.textStyles.titleSmall} nativeID="formLabel">Username</Text>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    style={styles.input}
                    accessibilityLabelledBy="formLabel"
                    accessibilityLabel="Username input"
                    accessibilityHint="Enter your username"

                />
                <Text style={theme.textStyles.titleSmall} nativeID="formLabel">Password</Text>
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    accessibilityLabelledBy="formLabel"
                    accessibilityLabel="Password input"
                    accessibilityHint="Enter your password"
                />
                <Pressable 
                  onPress={handleLogin} 
                  style={styles.button} 
                  accessibilityRole="button"
                  accessibilityLabel="Sign in to your account"
                >
                  <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Login</Text>
                </Pressable>
            </View>
    </Layout>
  );
};

export default LoginFormScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  input: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 12,
    padding: 12,
  },
  button: {
    backgroundColor: '#46D2CA',
    borderRadius: 10,     
    padding: 12,
 },
});

/* Accessibility

Skärmläsare läser också placeholder, men accessibilityLabel är säkrare och mer konsekvent. 

För pressable: 
accessibilityState={{ disabled: false, busy: false }}
Om det finns sådana tillstånd (t ex vid inloggning eller när knappen är inaktiv).

*/