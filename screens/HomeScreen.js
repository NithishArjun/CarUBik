import { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import NoCarAdded from "../components/NoCarAdded";
import VehicleList from "../components/VehicleList";
import { VehiclesContext } from "../store/vehicles-context";

function HomeScreen() {
  const vehiclesCtx = useContext(VehiclesContext);

  return (
    <View style={styles.container}>
      {vehiclesCtx.vehicles.length == 0 ? <NoCarAdded /> : <VehicleList />}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
