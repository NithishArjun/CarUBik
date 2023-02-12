import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function UiButton({ title, isFullWidth, onPress, className, isLoading }) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={
            className == "primary"
              ? ["#ee4978", "#e63480", "#d02390"]
              : ["#666", "#666"]
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.textView, isFullWidth ? styles.fullWidth : null]}
        >
          <View
            style={[
              styles.buttonContainer,
              className == "flat" ? styles.flatButton : null,
            ]}
          >
            <Text
              style={[
                styles.text,
                className == "flat" ? styles.flatButtonText : null,
              ]}
            >
              {title}
            </Text>
            {isLoading ? (
              <ActivityIndicator
                color="#FFF"
                size="small"
                style={styles.image}
              />
            ) : (
              ""
            )}
            {isFullWidth && className == "primary" && !isLoading ? (
              <Image
                source={require("../assets/images/right-arrow.png")}
                style={styles.image}
              />
            ) : (
              ""
            )}
          </View>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default UiButton;

const styles = StyleSheet.create({
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  textView: {
    borderRadius: 4,
    alignItems: "center",
  },
  fullWidth: {
    flex: 1,
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    flexGrow: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  flatButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#d02390",
    borderRadius: 4,
  },
  flatButtonText: {
    color: "#d02390",
  },
  image: {
    height: 16,
    width: 32,
  },
});
