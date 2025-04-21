import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const CardSection = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Card title={title.toLowerCase()} />
    </View>
  );
};

export default CardSection;

const styles = StyleSheet.create({});
