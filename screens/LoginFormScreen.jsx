import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/layout/Layout";
import { useState } from 'react';
import * as SecureStore from "expo-secure-store";

export default function LoginFormScreen() {
    const { theme } = useTheme(); // Get theme

    const[key, setKey] = useState();
    const [value, setValue] = useState();

    const saveSecureValue = async () => {
        await SecureStore.setItemAsync(key, value);
        setKey();
        setValue();
    };

    const retriveSecureValue = async () => {
        let result = await SecureStore.getItemAsync(key);
        setValue(result);
    };

  return (
    <Layout scrollable>
        <View>
            <TextInput value={key} onChangeText={setKey} placeholder="Key" />
            <TextInput value={value} onChangeText={setValue} placeholder="Value" />
            <Button title="Save Key & Value" onPress={saveSecureValue} />
            <Button title="Retrieve Value" onPress={retriveSecureValue} />
        </View>
    </Layout>
  )
}

const styles = StyleSheet.create({})