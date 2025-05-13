import { StyleSheet, Image, Text, View } from 'react-native'
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/layout/Layout';

const ProfileScreen = () => {
    const { theme } = useTheme();
    return (
        <Layout scrollable>
            <View style={styles.container}>
                <Image
                source={require("../assets/images/profile-example.jpg")}
                style={styles.profileimg}
                />
                <Text style={theme.textStyles.titleMedium} accessibilityRole="header">Maggie Pearson</Text>
            </View>
        </Layout>
    )
};

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 20,
    }, 
    profileimg: {
        borderColor: '#fff',
        borderRadius: 75,
        borderWidth: 6,
        height: 150,
        marginBottom: 16,
        width: 150,
    }
});