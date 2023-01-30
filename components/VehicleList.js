import { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { VehiclesContext } from "../store/vehicles-context";
import EachVehicle from "./EachVehicle";

function VehicleList() {
  const vehicleCtx = useContext(VehiclesContext);

  const vehicles = vehicleCtx.vehicles;

  return (
    <View>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EachVehicle data={item} />}
      ></FlatList>
    </View>
  );
}

export default VehicleList;

const styles = StyleSheet.create({});
