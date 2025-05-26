import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

const WarningCard  = ({ type = 'default' }) => {
  const { theme } = useTheme();

  const warningTypes = {
    default: {
      icon: 'information',
      color: theme.colors.accent,
      label: 'Information',
      title: 'Lorem ipsum',
      message: 'Please be cautious and stay informed.',
    },
    warning: {
      icon: 'alert-circle',
      color: theme.colors.warning,
      label: 'Warning',
      title: 'Lorem ipsum',
      message: 'Please be cautious and stay informed.',
    },
    heat: {
      icon: 'weather-sunny-alert',
      color: theme.colors.warning,
      title: 'High temperature',
      label: 'Warning',
      message: 'High temperatures today. Stay hydrated and take breaks.',
    },
    heartrate: {
      icon: 'heart-pulse',
      color: theme.colors.warning,
      label: 'Warning',
      title: 'High heart rate',
      message: 'Elevated heart rate – take a break and breathe.',
    },
   noise: {
      icon: 'ear-hearing',
      label: 'Warning',
      color: theme.colors.warning,
      title: 'High noise level',
      message: 'Loud environment detected – consider ear protection.',
    },
    steps: {
      icon: 'shoe-print',
      color: theme.colors.warning,
      label: 'Warning',
      title: 'Steps',
      message: "You've walked a lot today – time for a break?",
    },
    gas: {
      icon: 'weather-windy',
      label: 'Warning',
      color: theme.colors.warning,
      title: 'Airborne gas detected',
      message: 'Air quality alert – limit outdoor activity.',
    },
  };

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
      <Text style={theme.textStyles.textLabel}>{warning.label}</Text>
        <Text style={theme.textStyles.titleCard}>{warning.title}</Text>
        <Text style={[theme.textStyles.textBody, { flexShrink: 1 }]}>
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
  },
});

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