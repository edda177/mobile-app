import { useTheme } from '../context/ThemeContext';
import Layout from "../components/layout/Layout";
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import { useAuth } from '../context/AuthContext'; // Använder AuthContext

const LoginFormScreen = () => {

    const { theme } = useTheme(); // Get theme

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Hämta login-funktionen från context
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        setError(null);
        try {
        await login(email, password);
        // Om login lyckas händer inget mer här direkt, men token är nu sparad
        } catch (err) {
        setError('Login failed. Please check your credentials.');
        }
    };

  return (
        <Layout scrollable>
            <View style={styles.container}>
            <Text style={theme.textStyles.titleLarge}>Login</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />
                <Pressable onPress={handleLogin} style={styles.button}>
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
