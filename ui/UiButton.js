import { View, Pressable, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function UiButton({ title, isFullWidth, onPress, className }) {
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
            {isFullWidth && className == "primary" ? (
              <Image source={require("../assets/images/right-arrow.png")} />
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
  },
  buttonPressed: {
    opacity: 0.5,
  },
  textView: {
    borderRadius: 4,
    alignItems: "center",
  },
  fullWidth: {
    width: "100%",
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
    paddingVertical: 12,
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
});
