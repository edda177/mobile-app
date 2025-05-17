import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useTheme } from "../context/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/* ThemeSwitch är en knapp som byter mellan ljus och mörkt läge.
Den tar emot två props: 
- isOn (true/false) som visar om mörkt läge är aktivt
- onToggle, en funktion som körs när man trycker */

const ThemeSwitch = ({ onToggle, isOn }) => {
	const { theme } = useTheme(); // Hämtar aktuell färgtema från ThemeContext
	const styles = createStyles(theme); // Skapar stilar baserat på det aktuella temat

	return (
		// När man trycker på knappen körs onToggle
		<Pressable 
			onPress={onToggle} 
			style={styles.container}
			accessibilityRole="switch" // Säger till skärmläsaren att detta är en växlare
			accessibilityLabel="Dark mode" // Beskrivning av vad detta är
			accessibilityState={{ checked: isOn }} // Beskriver om växeln är på eller av
			accessibilityHint="Toggles between dark mode and light mode" // Extra hjälptext
		>

			{/* Själva "skenan" bakom knappen, får annan färg om den är på */}
			<View style={[styles.track, isOn && styles.trackOn]}>

				{/* Den runda "knappen" flyttas till höger om isOn är true */}
				<View style={[styles.thumb, isOn && styles.thumbOn]}>

					{/* Ikonen visar en måne i mörkt läge, annars en sol */}
					<MaterialCommunityIcons
						name={isOn ? "weather-night" : "white-balance-sunny"}
						size={16}
						color={theme.colors.dark} // Ikonens färg anpassas efter tema
					/>
				</View>
			</View>
		</Pressable>
	)
};

export default ThemeSwitch;

const createStyles = (theme) =>
	StyleSheet.create({
		container: {
				alignSelf: "flex-start"
		},
		track: {
				width: 60,
				height: 30,
				backgroundColor: theme.colors.accent,
				borderRadius: 18,
				justifyContent: "center"
		},
		trackOn: {
				backgroundColor: theme.colors.accent,
		},
		thumb: {
				width: 30, 
				height: 30,
				backgroundColor: theme.colors.snow,
				borderRadius: 15,
				justifyContent: "center",
				alignItems: "center",
				alignSelf: "flex-start",
		},
		thumbOn: {
				alignSelf: "flex-end"
		}
});