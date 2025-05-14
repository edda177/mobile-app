import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/layout/Layout";
import CardSection from "../components/CardSection";

const DataScreen = ({ route, title }) => {
  const { stackTitle } = route.params || "Temperature";
  const { theme } = useTheme();

  return (
    <Layout scrollable>
      <View>
        <CardSection
          title={title !== undefined ? title : stackTitle}
          arrow={false}
        />
        <Text style={theme.textStyles.titleMedium}>Averages</Text>
      </View>
    </Layout>
  );
};

export default DataScreen;

const styles = StyleSheet.create({});
