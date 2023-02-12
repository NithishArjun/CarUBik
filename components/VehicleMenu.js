import { useState, useContext } from "react";
import { Pressable, View, Image } from "react-native";

import { Menu, Divider } from "react-native-paper";
import { VehiclesContext } from "../store/vehicles-context";
import EditVehicleDetails from "./EditVehicleDetails";

function VehicleMenu({ id, editHandler }) {
  const [visible, setVisible] = useState(false);

  const vehiclesCtx = useContext(VehiclesContext);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Pressable onPress={openMenu}>
            <Image source={require("../assets/images/menu.png")}></Image>
          </Pressable>
        }
      >
        <Menu.Item
          onPress={() => {
            editHandler();
            setVisible(false);
          }}
          title="Edit Details"
        />
        <Menu.Item onPress={() => {}} title="Add Expense" />
        <Divider />
        <Menu.Item
          onPress={() => {
            vehiclesCtx.deleteVehicle(id);
            setVisible(false);
          }}
          title="Delete Vehicle"
        />
      </Menu>
    </View>
  );
}

export default VehicleMenu;
