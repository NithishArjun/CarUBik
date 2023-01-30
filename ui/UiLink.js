import { Pressable, StyleSheet, View, Text } from "react-native";

function UiLink({ title, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.linkView}>
        <Text style={styles.linkText}>{title}</Text>
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
  },
});
