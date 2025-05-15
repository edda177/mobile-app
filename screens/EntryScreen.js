import { useEffect, useRef } from "react";
import { View, StyleSheet, Animated, StatusBar } from "react-native";
import Shield from "../components/Shield";
import Sentinel from "../components/Sentinel";

const EntryScreen = ({ navigation }) => {

  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        // Lägg till fade out innan navigation
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          navigation.replace("MainApp");
        });
      }, 600);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Dölj statusbarens färg (valfritt) */}
      <StatusBar backgroundColor="#D5E2E2" barStyle="dark-content" hidden={true} />

      <Animated.View style={[styles.logoContainer, { opacity, transform: [{ scale }] }]}>
        <Shield width={120} height={120} />
        <Sentinel width={160} height={160} />
    </Animated.View>

    </View>
  );
};

export default EntryScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#D5E2E2",
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  }
});
