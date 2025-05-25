import { View, TextInput, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Layout from "../components/layout/Layout";
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

// const LoginFormScreen = () => {
const LoginFormScreen = ({ navigation }) => {

    const { theme } = useTheme(); // Get theme

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Hämta login-funktionen från context
    const [error, setError] = useState(null);

    const handleLogin = async () => {
      setError(null);
      try {
        await login(username, password); // Anropare login från AuthContext
      } catch (err) {
        setError("Login failed. Please check your credentials.");
      }
    };

  return (
        <Layout scrollable>
            <View style={styles.container}>
              <Text style={theme.textStyles.titleLarge} accessibilityRole="header">Login</Text>
              <Text style={theme.textStyles.inputTitle}>Username</Text>
                <TextInput
                    placeholder="Enter username"
                    placeholderTextColor="#888"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    style={styles.input}
                    accessibilityLabel="Username input field"
                    accessibilityHint="Enter your username"

                />
                <Text style={theme.textStyles.inputTitle}>Password</Text>
                <TextInput
                    secureTextEntry
                    placeholder="Enter password"
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    accessibilityLabel="Password input field"
                    accessibilityHint="Enter your password"
                />
                
                <PrimaryButton
                    title="Login"
                    onPress={handleLogin} 
                    variant="primary"
                    accessibilityRole="button"
                    accessibilityLabel="Login button"
                    accessibilityHint="Log in to your account"
                />

                {/* Tillfällig länk till HomeScreen */}
                <TouchableOpacity
                  onPress={() => login("guest", "guest")}
                  style={styles.linkContainer}
                >
                  <Text style={styles.linkText}>Fortsätt utan att logga in</Text>
                </TouchableOpacity>

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
    borderRadius: 10,
    marginBottom: 12,
    padding: 12,
  },
  button: {
    backgroundColor: '#46D2CA',
    borderRadius: 10,     
    padding: 12,
 },
 linkContainer: {
    marginTop: 20,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});


    // const handleLogin = async () => {
    //     setError(null);
    //     try {
    //     await login(username, password);
    //     // Om login lyckas händer inget mer här direkt, men token är nu sparad
    //     } catch (err) {
    //     setError('Login failed. Please check your credentials.');
    //     }
    // };

/* Accessibility

Skärmläsare läser också placeholder, men accessibilityLabel är säkrare och mer konsekvent. 

För pressable: 
accessibilityState={{ disabled: false, busy: false }}
Om det finns sådana tillstånd (t ex vid inloggning eller när knappen är inaktiv).

*/