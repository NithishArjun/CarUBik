import { createContext, useReducer } from "react";
import { Vehicle } from "../modal/vehicle";

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
        return [...state, { ...action.payload, id: id }];
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
      return updatedVehicle;
    }
    case "DELETE": {
      return state.filter((vehicle) => vehicle.id !== action.payload.id);
    }
    default:
      return state;
  }
}

function VehiclesContextProvider({ children }) {
  const [vehiclesState, dispatch] = useReducer(vehiclesReducer, []);

  function addVehicle(vehicleData) {
    dispatch({ type: "ADD", payload: vehicleData });
  }

  function deleteVehicle(id) {
    dispatch({ type: "DELETE", payload: id });
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
