import { useState } from "react";
import { Pressable, View, Image } from "react-native";

import { Menu, Divider } from "react-native-paper";

function VehicleMenu() {
  const [visible, setVisible] = useState(false);

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
        <Menu.Item onPress={() => {}} title="Edit details" />
        <Menu.Item onPress={() => {}} title="Book a service" />
        <Divider />
        <Menu.Item onPress={() => {}} title="View all" />
      </Menu>
    </View>
  );
}

export default VehicleMenu;
