import { Image, Pressable } from "react-native";

function UiIconButton({ type, onPress }) {
  return (
    <Pressable onPress={onPress}>
      {type === "add" ? (
        <Image source={require("../assets/images/plus.png")} />
      ) : (
        <></>
      )}
    </Pressable>
  );
}

export default UiIconButton;
