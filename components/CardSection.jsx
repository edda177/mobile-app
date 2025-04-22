import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const CardSection = ({ title }) => {
  const category = title.replaceAll(" ", "_");
  return (
    <View>
      <Text>{title}</Text>
      <Card title={category.toLowerCase()} />
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({});
