import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../context/ThemeContext';
import Layout from '../components/layout/Layout';
import CardSection from '../components/CardSection';

const TempScreen = () => {
	const { theme } = useTheme();

  	return (
		<Layout scrollable>
			<View>
                <CardSection title = "Temperature"/>
				<Text style={theme.textStyles.titleMedium}>Averages</Text>
			</View>
    	</Layout>
  	)
}

export default TempScreen

const styles = StyleSheet.create({})