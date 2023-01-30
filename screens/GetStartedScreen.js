import { StyleSheet, View, ImageBackground, Text } from "react-native";
import UiButton from "../ui/UiButton";

function GetStartedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/splashBackground.jpg")}
        style={styles.image}
      >
        <View style={styles.buttonContainer}>
          <UiButton
            title="Get Started"
            isFullWidth={true}
            className="primary"
            onPress={() => {
              navigation.replace("LoginScreen");
            }}
          ></UiButton>
        </View>
      </ImageBackground>
    </View>
  );
}

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    padding: 16,
    paddingBottom: 40,
  },
  buttonContainer: {},
});
