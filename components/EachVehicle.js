import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import EditVehicleDetails from "./EditVehicleDetails";
import VehicleMenu from "./VehicleMenu";

function EachVehicle({ data }) {
  const [editDetialsModalVisible, setEditDetailsModalVisible] = useState(false);

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
                <Text style={styles.label}>Insurance due on:</Text>
                <Text style={styles.value}>25-04-2023</Text>
              </View>
            </View>
            <View style={styles.detailImageRowEachFooterContainer}>
              <View style={[styles.detailImageRowEachFooter, styles.green]}>
                <Image
                  source={require("../assets/images/tick.png")}
                  style={styles.detailImageRowEachFooterIcon}
                ></Image>
                <Text
                  style={[styles.detailImageRowEachFooterText, styles.green]}
                >
                  Expires in 3 months
                </Text>
              </View>
            </View>
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
                <Text style={styles.label}>PUC due on:</Text>
                <Text style={styles.value}>17-08-2023</Text>
              </View>
            </View>
            <View style={styles.detailImageRowEachFooterContainer}>
              <View style={[styles.detailImageRowEachFooter, styles.amber]}>
                <Image
                  source={require("../assets/images/warning.png")}
                  style={styles.detailImageRowEachFooterIcon}
                ></Image>
                <Text
                  style={[styles.detailImageRowEachFooterText, styles.amber]}
                >
                  Expires in 2 months
                </Text>
              </View>
            </View>
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
                <Text style={styles.label}>Last service date:</Text>
                <Text style={styles.value}>25-08-2022</Text>
              </View>
            </View>
            <View style={styles.detailImageRowEachFooterContainer}>
              <View style={[styles.detailImageRowEachFooter, styles.amber]}>
                <Image
                  source={require("../assets/images/warning.png")}
                  style={styles.detailImageRowEachFooterIcon}
                ></Image>
                <Text
                  style={[styles.detailImageRowEachFooterText, styles.amber]}
                >
                  4 months since last service
                </Text>
              </View>
            </View>
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
                <Text style={styles.value}>NA</Text>
              </View>
            </View>
            <View style={styles.detailImageRowEachFooterContainer}>
              <View style={[styles.detailImageRowEachFooter, styles.red]}>
                <Image
                  source={require("../assets/images/error.png")}
                  style={styles.detailImageRowEachFooterIcon}
                ></Image>
                <Text style={[styles.detailImageRowEachFooterText, styles.red]}>
                  Expired
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <EditVehicleDetails
        isVisible={editDetialsModalVisible}
        onCancel={hideEditModal}
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
    color: "#888",
    fontSize: 12,
  },
  value: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "500",
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
  detailImageRowEachFooterContainer: {
    marginTop: 8,
    alignItems: "flex-start",
  },
  detailImageRowEachFooter: {
    flexDirection: "row",
    paddingLeft: 4,
    paddingRight: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    opacity: 0.8,
  },
  detailImageRowEachFooterIcon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  },
  detailImageRowEachFooterText: {
    fontSize: 9,
    marginLeft: 4,
    fontWeight: "bold",
  },
  green: {
    color: "green",
    borderColor: "green",
  },
  amber: {
    color: "orange",
    borderColor: "orange",
  },
  red: {
    color: "red",
    borderColor: "red",
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
});
