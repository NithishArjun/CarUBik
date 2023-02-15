import { Modal, ScrollView, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UiButton from "../ui/UiButton";
import UiDatePicker from "../ui/UiDatePicker";
import { useContext, useEffect, useState } from "react";
import { VehiclesContext } from "../store/vehicles-context";

function EditVehicleDetails({ isVisible, vehicleData, onCancel, onSave }) {

  const vehicleCtx = useContext(VehiclesContext);
  const [vehicleState, setVehicleState] = useState({...vehicleData});

  function datepickerChangeHandler(objectKey,dt){
    const updatedItem = {[objectKey]:dt};
    setVehicleState(prevState=>({...prevState,vehicleDetails:{...prevState.vehicleDetails,...updatedItem}}));
  }

  function saveVehicleDetails(){
    vehicleCtx.updateVehicle(vehicleState.id,vehicleState);
    onSave(vehicleState);
    onCancel();
  }

  function closeModal(){
    setVehicleState({...vehicleData});
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
        <View style={styles.formContainer}>
          <UiDatePicker value={vehicleState.vehicleDetails['insuranceExpiryDate']} controlKey="insuranceExpiryDate" onConfirmHandler={datepickerChangeHandler} label="Insurance Expiry Date:"></UiDatePicker>
          <UiDatePicker value={vehicleState.vehicleDetails['rsaExpiryDate']}  controlKey="rsaExpiryDate" onConfirmHandler={datepickerChangeHandler} label="RSA Expires On:"></UiDatePicker>
          <UiDatePicker value={vehicleState.vehicleDetails['pucExpiryDate']}  controlKey="pucExpiryDate" onConfirmHandler={datepickerChangeHandler} label="Warranty Till:"></UiDatePicker>
          <UiDatePicker value={vehicleState.vehicleDetails['warrantyExpiryDate']}  controlKey="warrantyExpiryDate" onConfirmHandler={datepickerChangeHandler} label="PUC Expires On:"></UiDatePicker>
          <UiDatePicker value={vehicleState.vehicleDetails['lastServiceDate']}  controlKey="lastServiceDate" onConfirmHandler={datepickerChangeHandler} label="Last Service Done On:"></UiDatePicker>
          <View style={styles.buttonContainer}>
            <View style={styles.primaryBtnView}>
              <UiButton
                title="Save"
                isFullWidth={true}
                className="primary"
                onPress={saveVehicleDetails}
              ></UiButton>
            </View>
            <View style={styles.secondaryBtnView}>
              <UiButton
                title="Cancel"
                isFullWidth={true}
                onPress={closeModal}
                className="secondary"
              ></UiButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

export default EditVehicleDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    height: 12,
  },
  formContainer: {
    padding: 16,
    marginTop: 32,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  primaryBtnView: {
    flexGrow: 2,
  },
  secondaryBtnView: {
    flexGrow: 1,
    marginLeft: 8,
  },
});
