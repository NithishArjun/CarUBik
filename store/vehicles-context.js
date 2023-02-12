import { createContext, useEffect, useReducer, useState } from "react";
import { Vehicle } from "../modal/vehicle";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const VehiclesContext = createContext({
  vehicles: [],
  addVehicle: ({ ...Vehicle }) => {},
  updateVehicle: (id, { ...Vehicle }) => {},
  deleteVehicle: (id) => {},
});

function vehiclesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      {
        const id = new Date().toString() + Math.random().toString();
        const newState = [...state, { ...action.payload, id: id }];
        AsyncStorage.setItem("vehicles", JSON.stringify(newState));
        return newState;
      }
      break;
    case "UPDATE": {
      const index = state.findIndex(
        (vehicle) => vehicle.id === action.payload.id
      );
      const updatableVehicle = state[index];
      const updatedItem = { ...updatableVehicle, ...action.payload.data };
      const updatedVehicle = [...state];
      updatedVehicle[index] = updatedItem;
      AsyncStorage.setItem("vehicles", JSON.stringify(updatedVehicle));
      return updatedVehicle;
    }
    case "DELETE": {
      const newState = state.filter(
        (vehicle) => vehicle.id !== action.payload.id
      );
      AsyncStorage.setItem("vehicles", JSON.stringify(newState));
      return newState;
    }
    case "INITIALIZE": {
      return action.payload;
    }
    default:
      return state;
  }
}

function VehiclesContextProvider({ children }) {
  useEffect(() => {
    async function fetchVehicles() {
      const vehiclesData = await AsyncStorage.getItem("vehicles");
      if (vehiclesData) {
        dispatch({ type: "INITIALIZE", payload: JSON.parse(vehiclesData) });
      }
    }
    fetchVehicles();
  });

  const [vehiclesState, dispatch] = useReducer(vehiclesReducer, []);

  function addVehicle(vehicleData) {
    dispatch({ type: "ADD", payload: vehicleData });
  }

  function deleteVehicle(id) {
    dispatch({ type: "DELETE", payload: { id: id } });
  }

  function updateVehicle(id, vehicleData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: vehicleData } });
  }

  const value = {
    vehicles: vehiclesState,
    addVehicle: addVehicle,
    updateVehicle: updateVehicle,
    deleteVehicle: deleteVehicle,
  };

  return (
    <VehiclesContext.Provider value={value}>
      {children}
    </VehiclesContext.Provider>
  );
}

export default VehiclesContextProvider;
