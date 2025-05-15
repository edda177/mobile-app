import { StyleSheet, Text, View } from "react-native";

import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import CardSection from "../components/CardSection";

const NewsScreen = () => {
  return (
    <Layout scrollable>
      <View>
        <CardSection title="News" />
      </View>
    </Layout>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});
