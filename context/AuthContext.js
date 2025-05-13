import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// Skapar ett nytt context-objekt
const AuthContext = createContext();

// AuthProvider-komponenten wrappas runt appen och tillhandahåller auth-data
export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null); // Håller aktuell token

  // Körs en gång när appen startar – hämtar token om den finns
  useEffect(() => {
    const getToken = async () => {
      const token = await SecureStore.getItemAsync('userToken');
      if (token) {
        setUserToken(token);
      }
    };
    getToken();
  }, []);

  // Loggar in användaren och sparar token
  const login = async (email, password) => {
    try {
      // Skicka POST-förfrågan till API (byt till vår faktiska URL)
      // Försöker just nu skicka en POST-förfrågan till en API-url som inte existerar (så login() kommer att misslyckas
      // Om den hade fungerat, skulle den spara token i enheten via expo-secure-store
      // Den sparade token finns i userToken och kan användas för att styra flöden (t ex om användaren är inloggad eller inte)
      const response = await axios.post('https://our-api.com/login', { // Denna url är bara en platshållare, vi behöver få en riktig token
        email,
        password,
      });

      const token = response.data.token;

      // Spara token säkert
      await SecureStore.setItemAsync('userToken', token);

      // Uppdatera state
      setUserToken(token);
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Skicka vidare till den som kallar på login()
    }
  };

  // Loggar ut användaren
  const logout = async () => {
    await SecureStore.deleteItemAsync('userToken');
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Exporterar en custom hook för att vi ska kunna använda auth-funktioner
export const useAuth = () => useContext(AuthContext);

/* Vad är en token? 

En token (oftast en JWT – JSON Web Token) är en liten datasträng som skapas av backend vid inloggning. Den används för att:
Identifiera användaren i efterföljande API-anrop (utan att behöva skicka lösenordet varje gång).
Verifiera att användaren är inloggad.

Exempel på en token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

Backendens ansvar:
En faktisk inloggnings-API-endpoint (t ex https://api.dittföretag.se/auth/login)

När man skickar email + password dit, ska den returnera:

json
{ "token": "eyJhbGciOiJIUzI1Ni..." }

Om detta inte finns ännu, behöver vi be backend-utvecklarna att:

Implementera inloggnings-API som returnerar en token vid lyckad inloggning.
Berätta hur token ska användas (t ex i headers när du hämtar data efter inloggning).

Fråga backend-teamet:

Finns en inloggnings-endpoint?
Vilken URL ska vi anropa?
Hur returneras token (exakt struktur)?
Behöver vi headers vid efterföljande anrop?

Annars:
Fortsätta lokalt med testtoken:
För test kan vi hårdkoda en token i login:

const fakeToken = 'my-hardcoded-token';
await SecureStore.setItemAsync('userToken', fakeToken);
setUserToken(fakeToken);

Vi kan mocka login med en testtoken, så kan vi prova hela flödet utan riktig backend.

*/