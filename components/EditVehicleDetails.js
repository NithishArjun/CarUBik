import { Modal, ScrollView, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UiButton from "../ui/UiButton";
import UiDatePicker from "../ui/UiDatePicker";

function EditVehicleDetails({ isVisible, onCancel }) {
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
          <UiDatePicker label="Insurance Expiry Date:"></UiDatePicker>
          <UiDatePicker label="Warranty Till:"></UiDatePicker>
          <UiDatePicker label="RSA Expires On:"></UiDatePicker>
          <UiDatePicker label="PUC Expires On:"></UiDatePicker>
          <UiDatePicker label="Last Service Done On:"></UiDatePicker>
          <View style={styles.buttonContainer}>
            <View style={styles.primaryBtnView}>
              <UiButton
                title="Save"
                isFullWidth={true}
                className="primary"
              ></UiButton>
            </View>
            <View style={styles.secondaryBtnView}>
              <UiButton
                title="Cancel"
                isFullWidth={true}
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
