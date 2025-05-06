import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";
import HomeStack from "./HomeStack";
import HomeScreen from "../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";
import LoginFormScreen from "../screens/LoginFormScreen";
import { Pressable, Text } from "react-native";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { theme } = useTheme();
  // styling för news-badgen - lite snabbt än så länge
  const styles = {
    notice: {
      position: "absolute",
      top: "-10",
      right: "-12",
    },
  };
  // siffra för badgen på hem-tabben - får ändra hur man tar in siffran osv sen
  const notification = 3;

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          title: "Sentinel",
          headerRightContainerStyle: {
            padding: 16,
          },
          // headerShown: false, // Dölj headern för alla Tab.Screen
          tabBarStyle: {
            backgroundColor: theme.colors.primary,
            height: 80,
          },
          tabBarIconStyle: { marginTop: 8 },
          tabBarLabelStyle: { marginBottom: 12, fontSize: 12 },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={({ navigation }) => ({
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            // News-knappen i headern:
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("Testing")}>
                <Text>News</Text>
                <MaterialCommunityIcons
                  name="numeric-3-circle"
                  color={theme.colors.warning}
                  size={18}
                  style={styles.notice}
                />
              </Pressable>
            ),
            // notis på hem-tabben:
            tabBarBadge: notification,
          })}
        />
        <Tab.Screen
          name="News"
          component={TestScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="newspaper-variant"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Testing"
          component={TestScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="test-tube"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-line"
                color={"#fff"}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginFormScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="login-variant"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useTheme } from "../context/ThemeContext";

// import HomeScreen from "../screens/HomeScreen";
// import TempScreen from "../screens/TempScreen";
// import TestScreen from "../screens/TestScreen";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const Tabs = () => {
//   const { theme } = useTheme();

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: theme.colors.primary,
//           height: 80,
//         },
//         tabBarIconStyle: {
//           marginTop: 8,
//         },
//         tabBarLabelStyle: {
//           marginBottom: 12,
//           fontSize: 12,
//         },
//         tabBarActiveTintColor: '#fff',
//         tabBarInactiveTintColor: '#fff',
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="News"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="newspaper-variant" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Testing"
//         component={TestScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="coffee" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Statistics"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="chart-line" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
//         <Stack.Screen name="Temperature" component={TempScreen} />
//         {/* Lägg till fler skärmar här om du har fler */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useTheme } from "../context/ThemeContext";
// import HomeScreen from "../screens/HomeScreen";
// import TempScreen from "../screens/TempScreen";
// import TestScreen from "../screens/TestScreen";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const Navigation = () => {
//   const { theme } = useTheme(); // Get theme
//   return (
//     <NavigationContainer>
//     <Tab.Navigator
//         screenOptions={{
//           tabBarStyle: {
//             backgroundColor: theme.colors.primary,
//             height: 80, // Ökar höjden (standard är ca 60)
//           },
//           tabBarIconStyle: {
//             marginTop: 8, // Flytta ner ikonen något så den inte hamnar för högt
//           },
//           tabBarActiveTintColor: '#fff', // Färg på aktiv ikon/text
//           tabBarInactiveTintColor: '#fff', // Färg på inaktiva ikoner
//           //headerShown: false, // Döljer översta rubriken om vi inte vill visa den
//           tabBarLabelStyle: {
//             marginBottom: 12, // Flyttar upp texten lite så den närmar sig mitten
//             fontSize: 12, // Justera vid behov
//           },
//         }}
//     >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons name="home" color={"#fff"} size={size} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="News"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="newspaper-variant"
//                 color={"#fff"}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Testing"
//           component={TestScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="coffee"
//                 color={"#fff"}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Statistics"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="chart-line"
//                 color={"#fff"}
//                 size={size}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <MaterialCommunityIcons
//                 name="account"
//                 color={"#fff"}
//                 size={size}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;
