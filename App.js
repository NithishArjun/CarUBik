import { BackHandler, Button, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import UiIconButton from "./ui/UiIconButton";
import AddNewVehicle from "./components/AddNewVehicle";
import VehiclesContextProvider from "./store/vehicles-context";

import { Provider as PaperProvider } from "react-native-paper";
import GetStartedScreen from "./screens/GetStartedScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AuthContextProvider from "./store/auth-context";

export default function App() {
  const [addNewModalVisible, setAddNewModalVisible] = useState(false);

  function addNewCar() {
    setAddNewModalVisible(true);
  }

  function cancelAddNewModal() {
    setAddNewModalVisible(false);
  }

  const Stack = createNativeStackNavigator();

  return (
    <AuthContextProvider>
      <PaperProvider>
        <StatusBar style="dark"></StatusBar>
        <VehiclesContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: "#E99695" },
                headerTintColor: "black",
                title: "CarUBik",
                headerBackTitle: "Back",
                headerRight: () => {
                  return <UiIconButton type="add" onPress={addNewCar} />;
                },
              }}
            >
              <Stack.Screen
                name="GetSartedScreen"
                component={GetStartedScreen}
                options={{
                  title: "",
                  headerRight: () => {
                    return null;
                  },
                  headerShadowVisible: false,
                }}
              />
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  title: "",
                  headerRight: () => {
                    return null;
                  },
                  headerShadowVisible: false,
                }}
              />
              <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{
                  title: "",
                  headerRight: () => {
                    return null;
                  },
                  headerShadowVisible: false,
                }}
              />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          <AddNewVehicle
            isVisible={addNewModalVisible}
            onCancel={cancelAddNewModal}
          ></AddNewVehicle>
        </VehiclesContextProvider>
      </PaperProvider>
    </AuthContextProvider>
  );
}
