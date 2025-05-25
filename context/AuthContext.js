import { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

/* Expo-secure-store fungerar inte i webbläsare – bara i Android/iOS. 
Om vi vill stötta webben måste vi lägga till ett fallback som t ex använder AsyncStorage i webbläsaren. */
import { Platform } from 'react-native'; 

/* Skapar en global inloggningskontext som andra komponenter i appen 
kan använda för att veta om användaren är inloggad eller inte */
const AuthContext = createContext(); 

// Wrapper för SecureStore + fallback till localStorage på webben
// Eget objekt: Storage – fungerar både på mobil och webb
// När vi vill HÄMTA ett värde, kollar vi om vi kör i webbläsare (Platform.OS === 'web')
// Om ja: använd localStorage, annars expo-secure-store
const Storage = {
  getItemAsync: async (key) => {
    if (Platform.OS === 'web') {
      return localStorage.getItem(key);
    } else {
      return await SecureStore.getItemAsync(key);
    }
  },
  // När vi vill SPARA ett värde, kollar vi om vi kör i webbläsare (Platform.OS === 'web')
  // Om ja: använd localStorage, annars expo-secure-store 
  setItemAsync: async (key, value) => {
    if (Platform.OS === 'web') {
      localStorage.setItem(key, value);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  },
  // När vi vill TA BORT (LOGGA UT) ett värde, kollar vi om vi kör i webbläsare (Platform.OS === 'web')
  // Om ja: använd localStorage, annars expo-secure-store 
   deleteItemAsync: async (key) => {
    if (Platform.OS === 'web') {
      localStorage.removeItem(key); // För webb
    } else {
      await SecureStore.deleteItemAsync(key); // För mobil
    }
  },
};

// Den här komponenten lindar in hela appen så att alla barnkomponenter får tillgång till inloggningsinfo
export const AuthProvider = ({ children }) => {
  // Två tillstånd:
  const [isAuthenticated, setIsAuthenticated] = useState(false); //  isAuthenticated = om användaren är inloggad
  const [loading, setLoading] = useState(true); // loading = om vi fortfarande laddar data (t ex kontrollerar om token finns)

  /* När appen startar körs checkToken(). Den försöker hämta ett sparat token.
  Om det finns ett token (!!token = true), sätts isAuthenticated till true.
  Annars blir det false. I båda fall: loading sätts till false när vi är klara. */
  useEffect(() => {
    const checkToken = async () => {
      console.log("Run checkToken");
      try {
        const token = await Storage.getItemAsync('token');
        console.log("Token found:", token);
        setIsAuthenticated(!!token);
      } catch (err) {
        console.error("Failed to load token:", err);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  /* Ett enkelt "låtsas-login". Just nu loggar vi in vem som helst som fyller i något i formuläret.
  Om användaren skriver in inloggningsuppgifter – eller just guest/guest – sparas en token.
  Användaren markeras som inloggad (setIsAuthenticated(true)). 
  */
  const login = async (username, password) => {
    if ((username === "guest" && password === "guest") || (username && password)) {
      await Storage.setItemAsync("token", "dummyToken123");
      setIsAuthenticated(true);
    } else {
      throw new Error("Invalid credentials");
    }
  };

  // Tar bort token. Markerar användaren som utloggad.
  const logout = async () => {
    await Storage.deleteItemAsync("token");
    setIsAuthenticated(false);
  };

  // Gör isAuthenticated, login(), logout() och loading tillgängliga för alla komponenter via context
  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

/* 

Hook för att använda auth-funktioner i komponenter:
export const useAuth = () => useContext(AuthContext);

När vi vill använda auth någonstans i vår app (t ex LoginFormScreen), skriver vi:
const { login, logout, isAuthenticated } = useAuth() 

*/
