import { Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/layout/Layout";
//import { useAuth } from '../context/AuthContext';

const StatisticsScreen = () => {
  const { theme } = useTheme(); // Get theme

  return (
   <Layout scrollable>
      <View>

        <View style={{ marginBottom: 20 }}>
          <Text style={[theme.textStyles.titleLarge]}>Statistics</Text>

          <Text>Statistics on data will be presented here.</Text>     
        </View>  
    
      </View>
    </Layout>
  )
}

export default StatisticsScreen;

