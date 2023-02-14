import { useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import UiButton from "../ui/UiButton";
import AddNewVehicle from "./AddNewVehicle";

function NoCarAdded() {
  const [addNewModalVisible, setAddNewModalVisible] = useState(false);

  function addNewCar() {
    setAddNewModalVisible(true);
  }

  function cancelAddNewModal() {
    setAddNewModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/plainBackground.jpg")}
        style={styles.image}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.emptyText}>
            Looks like its all empty in here!
          </Text>
          <View style={styles.buttonContainer}>
            <UiButton
              title="Add Your Car / Bike"
              isFullWidth={true}
              onPress={addNewCar}
              className="primary"
            ></UiButton>
          </View>
        </View>
      </ImageBackground>
      <AddNewVehicle
        isVisible={addNewModalVisible}
        onCancel={cancelAddNewModal}
      ></AddNewVehicle>
    </View>
  );
}

export default NoCarAdded;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  innerContainer: {
    padding: 16,
  },
  emptyText: {
    fontSize: 40,
    lineHeight: 50,
    paddingTop: 8,
    color: "#333",
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 32,
  },
});
