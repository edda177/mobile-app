import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useTheme } from "../context/ThemeContext";
import Layout from "../components/layout/Layout";
import { useState } from 'react';
import * as SecureStore from "expo-secure-store";

export default function LoginFormScreen() {

  return (
    <Layout scrollable>
        <View>
            <TextInput placeholder="Username"/>
            <TextInput placeholder="Password" />
            <Button title="Login" />
        </View>
    </Layout>
  )
}

const styles = StyleSheet.create({})