import { BackHandler, Button, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useContext, useEffect, useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import UiIconButton from "./ui/UiIconButton";
import AddNewVehicle from "./components/AddNewVehicle";
import VehiclesContextProvider from "./store/vehicles-context";

import { Provider as PaperProvider } from "react-native-paper";
import GetStartedScreen from "./screens/GetStartedScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AuthContextProvider, { AuthContext } from "./store/auth-context";

import UserAccountMenu from "./components/UserAccountMenu";

const Stack = createNativeStackNavigator();

function UnAuthenticatedStack({ headerAddVehicleHandler }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#E99695" },
        headerTintColor: "black",
        title: "CarUBik",
        headerTitleStyle: { fontSize: 14, fontWeight: "normal" },
        headerBackTitle: "Back",
        headerRight: () => {
          return (
            <>
              <UiIconButton type="add" onPress={headerAddVehicleHandler} />
              <UserAccountMenu />
            </>
          );
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
  );
}

function AuthenticatedStack({ headerAddVehicleHandler }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#E99695" },
        headerTintColor: "black",
        title: "CarUBik",
        headerTitleStyle: { fontSize: 14, fontWeight: "normal" },
        headerBackTitle: "Back",
        headerRight: () => {
          return (
            <>
              <UiIconButton type="add" onPress={headerAddVehicleHandler} />
              <UserAccountMenu />
            </>
          );
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export function Navigation({ headerAddVehicleHandler }) {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authCtx.isAuthenticated ? (
        <AuthenticatedStack headerAddVehicleHandler={headerAddVehicleHandler} />
      ) : (
        <UnAuthenticatedStack
          headerAddVehicleHandler={headerAddVehicleHandler}
        />
      )}
    </NavigationContainer>
  );
}

export default function App() {
  const [addNewModalVisible, setAddNewModalVisible] = useState(false);

  function addNewCar() {
    setAddNewModalVisible(true);
  }

  function cancelAddNewModal() {
    setAddNewModalVisible(false);
  }

  return (
    <AuthContextProvider>
      <PaperProvider>
        <StatusBar style="dark"></StatusBar>
        <VehiclesContextProvider>
          <Navigation headerAddVehicleHandler={addNewCar}></Navigation>
          <AddNewVehicle
            isVisible={addNewModalVisible}
            onCancel={cancelAddNewModal}
          ></AddNewVehicle>
        </VehiclesContextProvider>
      </PaperProvider>
    </AuthContextProvider>
  );
}
