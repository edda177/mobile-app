import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons";
import { Link } from "@react-navigation/native";

const Card = ({ title }) => {
  const [icon, setIcon] = useState("");
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    const data = require(`../data.json/${title.trim()}`);
    const icon = data.filter((item) => item.icon);
    setIcon(icon);
    const value = data.filter((item) => item.value);
    setValue(value);
    const unit = data.filter((item) => item.unit);
    setUnit(unit);
    const link = data.filter((item) => item.link);
    setLink(link);
  }, []);
  return (
    <View>
      <Text>{value}</Text>
      {/* <MaterialCommunityIcons name={icon} color="grey" size={10} />
      <View>
        <Link to={link}>
          <MaterialCommunityIcons name="right" color="grey" size={5} />
        </Link>
        <Text>
          {value}
          <Text>{unit}</Text>
        </Text>
      </View> */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
