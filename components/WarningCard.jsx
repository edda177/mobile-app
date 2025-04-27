import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

const warningTypes = {
  default: {
    icon: 'information',
    color: '#FFA000',
    title: 'Information',
    message: 'Please be cautious and stay informed.',
  },
  warning: {
    icon: 'alert-circle',
    color: 'red',
    title: 'Warning',
    message: 'Please be cautious and stay informed.',
  },
  heat: {
    icon: 'weather-sunny-alert',
    color: 'red',
    title: 'Heat',
    message: 'High temperatures today. Stay hydrated and take breaks.',
  },
  heartrate: {
    icon: 'heart-pulse',
    color: '#FFA000',
    title: 'High heart rate',
    message: 'Elevated heart rate – take a break and breathe.',
  },
 noise: {
    icon: 'ear-hearing',
    color: 'red',
    title: 'High noise level',
    message: 'Loud environment detected – consider ear protection.',
  },
  steps: {
    icon: 'shoe-print',
    color: 'red',
    title: 'Steps',
    message: "You've walked a lot today – time for a break?",
  },
  gas: {
    icon: 'weather-windy',
    color: 'red',
    title: 'Airborne gas detected',
    message: 'Air quality alert – limit outdoor activity.',
  },
};

const WarningCard  = ({ type = 'default' }) => {
  const { theme } = useTheme();

  const warning = warningTypes[type] || warningTypes.default;

  return (
    <View style={[styles.cardWarning, { borderLeftColor: warning.color }]}>
      <MaterialCommunityIcons
        name={warning.icon}
        color={warning.color}
        size={40}
        style={{ marginRight: 12 }}
      />
      
      <View style={{ flex: 1 }}>
        <Text style={theme.textStyles.titleMedium}>{warning.title}</Text>
        <Text style={[theme.textStyles.bodyText, { flexShrink: 1 }]}>
          {warning.message}
        </Text>
      </View>
    </View>
  );
};

export default WarningCard ;

const styles = StyleSheet.create({
  cardWarning: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderLeftWidth: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

        {/* <Text style={theme.textStyles.titleMedium}>{title}</Text> */}

  // icon: {
  //   marginRight: 12,
  // },
  // messageContainer: {
  //   flex: 1,
  // },
  // title: {
  //   fontWeight: '600',
  //   fontSize: 16,
  //   marginBottom: 4,
  //   color: '#333',
  // },
  // message: {
  //   fontSize: 14,
  //   color: '#444',
  // },

  /* Hur fungerar koden?

Funktionen får en prop:
const WarningCard = ({ type = 'default' }) => {
type är ett ord (t.ex. "heat", "noise", "warning") som bestämmer vilken sorts varning vi vill visa.

Om inget type skickas in, används "default".

Hämta temat (färger, textstilar):
const { theme } = useTheme();
theme är ett objekt från vår app som innehåller stilar 

Bestäm vilken varning vi ska visa:
const warning = warningTypes[type] || warningTypes.default;
warningTypes är en lista vi har gjort som innehåller alla typer av varningar och deras utseende.

Om type hittas i warningTypes, används den.
Om inte, används default som en backup.

Returnera en kort-layout på skärmen:
return (
<View style={[styles.cardWarning, { borderLeftColor: warning.color }]}>
Yttersta rutan (View) är själva kortet.

Kortet har en färgad kant på vänster sida (borderLeftColor) som matchar varningens färg.

Visa en ikon till vänster:
<MaterialCommunityIcons
  name={warning.icon}
  color={warning.color}
  size={40}
  style={{ marginRight: 12 }}
/>

En ikon från Material Community Icons visas.
Ikonen ändras beroende på vilken typ av varning det är.

Visa rubrik och meddelande bredvid ikonen:
<View style={{ flex: 1 }}>
  <Text style={theme.textStyles.titleMedium}>{warning.title}</Text>
  <Text style={[theme.textStyles.bodyText, { flexShrink: 1 }]}>
    {warning.message}
  </Text>
</View>
En rubrik (title) och ett meddelande (message) visas.

Texten använder stilar från temat och får anpassa sig i bredd (flexShrink: 1) så den inte går utanför kortet.

*/