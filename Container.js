import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Import Icon
import { Ionicons } from "@expo/vector-icons";

// Import Theme Native Base
import { useTheme } from "native-base";

// Import Screen
import FormNativeBase from "./src/screens/FormNativeBase";
import Home from "./src/screens/Home";
import IncDec from "./src/screens/IncDec";
import ListSoc from "./src/screens/ListSoc";
import DetailSoc from "./src/screens/DetailSoc";
import Calculator from "./src/screens/Calculator";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();


// COMPONENT BOTTOM TAB NAVIGATION
function MyTab() {
  // Init Theme
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused 
            ? "ios-home" 
            : "ios-home-outline";
          } else if (route.name === "Form") {
            iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
          } else if (route.name === "Social Media") {
            iconName = focused 
            ? "ios-list-circle" 
            : "ios-list-circle-outline";
          } else if (route.name === "Calculator") {
            iconName = focused 
            ? "ios-calculator" 
            : "ios-calculator-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Form" component={FormNativeBase} />
      <Tab.Screen name="Social Media" component={ListSoc} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
}


export default function Container() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="IncDec"
          component={IncDec}
          options={{
            title: "Increment & Decrement",
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.primary["300"] },
          }}
        />
        <Stack.Screen
          name="Detail Social"
          component={DetailSoc}
          options={{
            title: "Detail Social",
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: theme.colors.primary["300"] },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
