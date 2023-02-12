import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Pressable, View, Image, StyleSheet, Text } from "react-native";

import { Menu, Divider } from "react-native-paper";
import { AuthContext } from "../store/auth-context";

function UserAccountMenu() {
  const [visible, setVisible] = useState(false);

  const authCtx = useContext(AuthContext);

  const navigation = useNavigation();

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Pressable onPress={openMenu}>
            <Image
              source={require("../assets/images/usersetting.png")}
              style={styles.image}
            ></Image>
          </Pressable>
        }
      >
        {authCtx.isAuthenticated ? (
          <>
            <Menu.Item
              onPress={() => {}}
              title={"Welcome '" + authCtx.email?.split("@")[0] + "'"}
              titleStyle={styles.boldText}
            />
            <Divider />
            <Menu.Item
              onPress={() => {}}
              title="Sync Online"
              titleStyle={styles.normalMenuText}
            />
            <Divider />
            <Menu.Item
              onPress={() => {
                authCtx.logout();
              }}
              title="Logout"
              titleStyle={styles.normalMenuText}
            />
          </>
        ) : (
          <Menu.Item
            onPress={() => {
              navigation.replace("LoginScreen");
            }}
            title="Login"
            titleStyle={styles.boldText}
          />
        )}
      </Menu>
    </View>
  );
}

export default UserAccountMenu;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  boldText: {
    fontWeight: "600",
    fontSize: 14,
  },
  normalMenuText: {
    fontSize: 14,
  },
});
