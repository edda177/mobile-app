import { View, Text } from 'react-native'
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/layout/Layout';
import ThemeSwitch from "../components/ThemeSwitch";
import NotificationSwitch from '../components/NotificationSwitch';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  // Hämtar aktuellt färgtema och funktion för att byta tema
  const { theme, toggleTheme } = useTheme();

  // Håller koll på om notifikationer är på eller av
  const [isEnabled, setIsEnabled] = useState(false);

  // Håller koll på om värdet är hämtat från AsyncStorage
  const [isLoaded, setIsLoaded] = useState(false);

  // Körs en gång när komponenten laddas
  useEffect(() => {
    const loadNotificationSetting = async () => {
      try {
        // Försöker hämta tidigare sparat värde för notifikationer
        const savedValue = await AsyncStorage.getItem('@notifications_enabled');
        if (savedValue !== null) {
          // Om ett värde finns, använd det
          setIsEnabled(JSON.parse(savedValue));
        } else {
          // Om inget sparat finns, sätt till "på" som standard
          setIsEnabled(true);
          await AsyncStorage.setItem('@notifications_enabled', JSON.stringify(true));
        }
      } catch (error) {
        // Om något går fel, skriv ut felmeddelande i konsolen
        console.error("Failed to load notification setting", error);
      } finally {
        // Oavsett vad som händer – markera att laddningen är klar
        setIsLoaded(true);
      }
    };
    loadNotificationSetting();
  }, []);

  // Växlar notifikations-inställningen och sparar det nya värdet
  const toggleSwitch = async () => {
    try {
      const newValue = !isEnabled; // Växla till motsatt värde
      setIsEnabled(newValue); // Uppdatera state
      await AsyncStorage.setItem('@notifications_enabled', JSON.stringify(newValue)); // Spara till lagring
    } catch (error) {
      console.error("Failed to save notification setting", error);
    }
  };

  return (
    <Layout scrollable>
      <View style={{ marginBottom: 20 }}>
        <Text style={[theme.textStyles.titleLarge]}>Settings</Text>

        <Text style={{ color: theme.colors.heading, marginBottom: 8 }}>
          {theme.mode === 'dark' ? 'Mode: Dark' : 'Mode: Light '}
        </Text>

        <ThemeSwitch
          isOn={theme.mode === "dark"}
          onToggle={toggleTheme}
        />

        <Text style={{ color: theme.colors.heading, marginBottom: 12, marginTop: 8 }}>
          Choose between Light or Dark Mode to match your visual preferences or environment.
        </Text>

        {isLoaded && (
        <>
          <Text style={{ color: theme.colors.heading, marginBottom: 8, marginTop: 12  }}>
            Notifications: {isEnabled ? 'On' : 'Off'}
          </Text>

          <NotificationSwitch 
            isOn={isEnabled} 
            onToggle={toggleSwitch} 
          />

          <Text style={{ color: theme.colors.heading, marginTop: 8 }}>
            We recommend keeping notifications enabled so you don’t miss important alerts and other safety-related information.
          </Text>
        </>
        )}
      </View>

    </Layout>
  );
};

export default SettingsScreen;