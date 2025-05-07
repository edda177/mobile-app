import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../context/ThemeContext';

// A reusable button component that is customizable with color and function
const PrimaryButton = ({ 
    onPress, // Function that runs when the button is pressed
    title = "Click here", // The text displayed on the button (default value if none is specified) 
    variant = "primary", // What type of button: "primary" or "secondary" (default is primary)
    style, // External style that can be submitted if needed
    ...props // Any other props to pass to Pressable
}) => {
    const { theme } = useTheme();  // Get theme
    const styles = createStyles(theme); // Creates style based on the theme

    // Choose the correct text style depending on the variant (white text for primary, blue for secondary)
    const textStyle = variant === 'primary' ? styles.textPrimary : styles.textSecondary;

    return (
        <Pressable
            onPress={onPress} // What happens when the button is pressed
            style={({ pressed }) => [ // Dynamic style: regular + variant + printed mode + external style
                styles.base, // Basic appearance (padding, rounded corners, etc )
                styles[variant], // Choose color depending on variant (primary/secondary)
                pressed && styles.pressed, // If the button is pressed, lower the opacity
                style, // Add any custom style from the parent component
            ]}
            {...props} // Passes on other props (for example availability)
        >
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
};

export default PrimaryButton;

const createStyles = (theme) =>
    StyleSheet.create({
        base: {
            alignItems: "center",
            borderRadius: 10,
            padding: 12,
            marginTop: 6,
        },
        primary: {
            backgroundColor: theme.colors.accent,
        },
        // Note! Works only on white background
        secondary: {
            backgroundColor: theme.colors.secondary,
        },
        pressed: {
            opacity: 0.75,
        },
        textPrimary: {
            fontSize: 16,
            fontWeight: "700",
            color: theme.colors.snow, // White text on accent background
        },
        textSecondary: {
            fontSize: 16,
            fontWeight: "700",
            color: theme.colors.primary, // Primary-colored text on secondary background
        },
    });