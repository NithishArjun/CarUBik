import { LinearGradient } from "expo-linear-gradient";
import { useContext, useState } from "react";
import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Vehicle } from "../modal/vehicle";
import { VehiclesContext } from "../store/vehicles-context";
import UiButton from "../ui/UiButton";

function AddNewVehicle({ isVisible, onCancel }) {
  const [newVehicle, setNewVehicle] = useState(new Vehicle("", "", "", ""));

  const vehiclesCtx = useContext(VehiclesContext);

  function inputValueTextChanged(inputIdentifier, enteredValue) {
    setNewVehicle((currData) => {
      return {
        ...currData,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function addNewCar() {
    vehiclesCtx.addVehicle(newVehicle);
    onCancel();
  }

  return (
    <Modal animationType="slide" visible={isVisible} transparent={true}>
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={["#ee4978", "#e63480", "#d02390"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.topBar}
        ></LinearGradient>
        <View style={styles.content}>
          <Text style={styles.textTitle}>Enter your vehicle details.</Text>
          <Text style={styles.label}>Make:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your vehicle make"
            onChangeText={inputValueTextChanged.bind(this, "vehicleMake")}
            value={newVehicle.vehicleMake}
          ></TextInput>
          <Text style={styles.label}>Model:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your vehicle model"
            onChangeText={inputValueTextChanged.bind(this, "vehicleModel")}
            value={newVehicle.vehicleModel}
          ></TextInput>
          <Text style={styles.label}>Year of manufacture:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your vehicle manufactured year"
            onChangeText={inputValueTextChanged.bind(this, "vehicleYear")}
            value={newVehicle.vehicleYear}
          ></TextInput>
          <Text style={styles.label}>Reg. Number (eg: KL-01-AA-1234):</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your vehicle registration number (eg: KL-01-AA-1234)"
            onChangeText={inputValueTextChanged.bind(this, "vehicleRegNumber")}
            value={newVehicle.vehicleRegNumber}
          ></TextInput>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <UiButton
                title="Add Your Car / Bike"
                isFullWidth={false}
                onPress={addNewCar}
                className="primary"
              ></UiButton>
            </View>
            <View style={styles.button}>
              <UiButton
                title="Cancel"
                isFullWidth={false}
                onPress={onCancel}
                className="secondary"
              ></UiButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

export default AddNewVehicle;

const styles = StyleSheet.create({
  container: {
    marginTop: 54,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    height: 12,
  },
  content: {
    padding: 16,
  },
  textTitle: {
    fontSize: 38,
    lineHeight: 48,
    maxWidth: "80%",
    marginTop: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginTop: 24,
    marginLeft: 4,
  },
  textInput: {
    borderWidth: 1,
    padding: 12,
    marginTop: 4,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 4,
  },
});
