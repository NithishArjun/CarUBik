import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { formatDate } from "../utility/CommonFunctions";
import EditVehicleDetails from "./EditVehicleDetails";
import ExpiryInfo from "./ExpiryInfo";
import VehicleMenu from "./VehicleMenu";

function EachVehicle({ data }) {
  const [editDetialsModalVisible, setEditDetailsModalVisible] = useState(false);
  const [vehicleDetails,setVehicleDetails] = useState(data);

  useEffect(()=>{
    setVehicleDetails(prevState=>data);
  },[data,vehicleDetails])

  function onEditVehicleSave(vehDetails){
    setVehicleDetails(vehDetails);
  }

  function showEditModal() {
    setEditDetailsModalVisible(true);
  }

  function hideEditModal() {
    setEditDetailsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          {data.vehicleMake + " " + data.vehicleModel}
        </Text>
        <VehicleMenu id={data.id} editHandler={showEditModal}></VehicleMenu>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/HondaCity.png")}
        ></Image>
        
      </View>
      <View style={styles.buttonContainer}>
          <View>
          <Button icon="pencil" mode="contained-tonal" onPress={() => showEditModal()}>
            Edit Details
          </Button>
          </View>
          <View>
          <Button icon="history" mode="outlined"  onPress={() => {}}>
            Add Expense
          </Button>
          </View>
        </View>
      <View style={styles.topDetailTextContainer}>
        
        <View style={styles.detailRow}>
          <View style={styles.detailRowEach}>
            <Text style={styles.label}>Make:</Text>
            <Text style={styles.value}>{data.vehicleMake}</Text>
          </View>
          <View style={styles.detailRowEach}>
            <Text style={styles.label}>Model:</Text>
            <Text style={styles.value}>{data.vehicleModel}</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.detailRowEach}>
            <Text style={styles.label}>Reg. number:</Text>
            <Text style={styles.value}>{data.vehicleRegNumber}</Text>
          </View>
          <View style={styles.detailRowEach}>
            <Text style={styles.label}>Year of manufature:</Text>
            <Text style={styles.value}>{data.vehicleYear}</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.detailImageRowEach}>
            <View style={styles.detailImageRowEachData}>
              <View style={styles.detailImageIconContainer}>
                <Image
                  style={styles.detailImageIcon}
                  source={require("../assets/images/insurance.png")}
                ></Image>
              </View>
              <View style={styles.detailImageRowEachTextConainer}>
                <Text style={styles.label}>Insurance:</Text>
                <Text style={styles.value}>{formatDate(data.vehicleDetails.insuranceExpiryDate)}</Text>
              </View>
            </View>
            <ExpiryInfo date={data.vehicleDetails.insuranceExpiryDate}></ExpiryInfo>
          </View>
          <View style={styles.detailImageRowEach}>
            <View style={styles.detailImageRowEachData}>
              <View style={styles.detailImageIconContainer}>
                <Image
                  style={styles.detailImageIcon}
                  source={require("../assets/images/pollution.png")}
                ></Image>
              </View>
              <View style={styles.detailImageRowEachTextConainer}>
                <Text style={styles.label}>PUC:</Text>
                <Text style={styles.value}>{formatDate(data.vehicleDetails.pucExpiryDate)}</Text>
              </View>
            </View>
            <ExpiryInfo date={data.vehicleDetails.pucExpiryDate} />
          </View>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.detailImageRowEach}>
            <View style={styles.detailImageRowEachData}>
              <View style={styles.detailImageIconContainer}>
                <Image
                  style={styles.detailImageIcon}
                  source={require("../assets/images/service.png")}
                ></Image>
              </View>
              <View style={styles.detailImageRowEachTextConainer}>
                <Text style={styles.label}>Warranty:</Text>
                <Text style={styles.value}>{formatDate(data.vehicleDetails.warrantyExpiryDate)}</Text>
              </View>
            </View>
            <ExpiryInfo date={data.vehicleDetails.warrantyExpiryDate} />
          </View>
          <View style={styles.detailImageRowEach}>
            <View style={styles.detailImageRowEachData}>
              <View style={styles.detailImageIconContainer}>
                <Image
                  style={styles.detailImageIcon}
                  source={require("../assets/images/rsa.png")}
                ></Image>
              </View>
              <View style={styles.detailImageRowEachTextConainer}>
                <Text style={styles.label}>RSA:</Text>
                <Text style={styles.value}>{formatDate(data.vehicleDetails.rsaExpiryDate)}</Text>
              </View>
            </View>
            <ExpiryInfo date={data.vehicleDetails.rsaExpiryDate} />
          </View>
        </View>
      </View>
      <EditVehicleDetails
        isVisible={editDetialsModalVisible}
        vehicleData={data}
        onCancel={hideEditModal}
        onSave = {onEditVehicleSave}
      ></EditVehicleDetails>
    </View>
  );
}

export default EachVehicle;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  titleText: {
    color: "#444",
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    marginTop: 40,
    marginBottom: 8,
  },
  image: {
    height: 200,
    resizeMode: "contain",
  },
  topDetailTextContainer: {
    backgroundColor: "white",
    width: "100%",
    padding: 12,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 0 },
  },
  detailRow: {
    flexDirection: "row",
    width: "100%",
  },
  detailRowEach: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  label: {
    color: "#777777",
    fontSize: 12,
  },
  value: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "600",
  },
  detailImageRowEach: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  detailImageRowEachData: {
    flexDirection: "row",
    alignItems: "center",
  },
  
  detailImageIconContainer: {
    backgroundColor: "#ffc0cb",
    borderRadius: 22,
    padding: 10,
    width: 44,
    height: 44,
  },
  detailImageIcon: {
    width: 24,
    height: 24,
  },
  detailImageRowEachTextConainer: {
    marginLeft: 10,
    justifyContent: "space-between",
  },
  buttonContainer:{
    flexDirection:"row",
    marginBottom:12,
    justifyContent:"space-evenly",
    width:'100%',
  }
});
