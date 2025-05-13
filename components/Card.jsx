import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Card = ({ title, arrow }) => {
  const { theme } = useTheme(); // Get theme

  const [value, setValue] = useState("");
  const [icon, setIcon] = useState("");
  const [unit, setUnit] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(title);

  useEffect(() => {
    const data = require("../data/data.json");
    let value = "";
    // vet inte om denna behövs??
    if (!data) {
      setIsLoading(false);
      setError("Något gick fel med att hämta datan");
    }

    switch (title) {
      case "temperature":
        setValue(data.temperature);
        setIcon("sun-thermometer-outline");
        setUnit("°C");

        break;
      case "humidity":
        setValue(data.humidity);
        setIcon("weather-fog");
        setUnit("%");

        break;
      case "gas":
        setValue(data.gas);
        setIcon("weather-windy-variant");
        setUnit("m^3");

        break;
      case "steps":
        setValue(data.steps);
        setIcon("shoe-print");
        setUnit("steps");

        break;
      case "heart_rate":
        setValue(data.heart_rate);
        setIcon("heart-pulse");
        setUnit("bpm");

        break;
      case "noise_level":
        setValue(data.noise_level);
        setIcon("ear-hearing");
        setUnit("dB");

        break;

      default:
        // vet inte om denna också ska ändras till setValue()
        value = "Något gick fel";

        break;
    }

    if (value === "Något gick fel") {
      setIsLoading(false);
      setError("Något gick fel med att hämta värdet just");
    } else {
      setIsLoading(false);
    }
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text style={{ color: "red" }}>{error}</Text>;
    }

    return (
      <View style={theme.card}>
        <MaterialCommunityIcons
          name={icon}
          color={theme.colors.primary}
          size={50}
        />
        <View style={{ alignItems: "flex-end" }}>
          {arrow && (
            <MaterialCommunityIcons
              name="chevron-right"
              color={theme.colors.accent}
              size={24}
            />
          )}

          <Text style={theme.textStyles.unitLarge}>
            {value}
            <Text style={theme.textStyles.unitSmall}> {unit}</Text>
          </Text>
        </View>
      </View>
    );
  };

  return <View>{getContent()}</View>;
};

export default Card;

const styles = StyleSheet.create({});
