import { Pressable, StyleSheet, View, Text } from "react-native";

function UiLink({ title, onPress, className }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.linkView}>
        <Text
          style={
            className === "secondary"
              ? styles.secondarylLinkText
              : styles.linkText
          }
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

export default UiLink;

const styles = StyleSheet.create({
  linkView: {},
  linkText: {
    fontWeight: "bold",
    color: "purple",
    fontSize: 16,
  },
  secondarylLinkText: {
    fontWeight: "bold",
    color: "#666",
    fontSize: 16,
  },
});
