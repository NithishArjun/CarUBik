import { useContext, useState } from "react";
import { Image, StyleSheet, TextInput, View, Text, Alert } from "react-native";
import { authenticateUser } from "../http/util/auth";
import { AuthContext } from "../store/auth-context";
import UiButton from "../ui/UiButton";
import UiLink from "../ui/UiLink";
import UiLoadingOverlay from "../ui/UiLoadingOverlay";
import getErrorMessageByCode from "../utility/FirebaseUtility";

function LoginScreen({ navigation }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
  });

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  async function submitHandler() {
    const email = enteredEmail.trim();
    const password = enteredPassword.trim();

    const emailIsValid = email.length > 2 && email.includes("@");
    const passwordIsValid = password != "";

    if (!emailIsValid || !passwordIsValid) {
      Alert.alert("Invalid input", "Please check you entered credentials");

      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
      });
      return;
    }

    setIsAuthenticating(true);
    try {
      const token = await authenticateUser(email, password);
      authCtx.authenticate(token);
    } catch (err) {
      Alert.alert(
        "Login Unsuccessful.",
        getErrorMessageByCode(err.response.data.error.message)
      );
    }
    setIsAuthenticating(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../assets/images/logo.png")}
        ></Image>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email address"
          autoCapitalize="none"
          value={enteredEmail}
          style={[
            styles.inputText,
            credentialsInvalid.email && styles.inputInvalid,
          ]}
          onChangeText={updateInputValueHandler.bind(this, "email")}
        ></TextInput>
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          value={enteredPassword}
          style={[
            styles.inputText,
            credentialsInvalid.password && styles.inputInvalid,
          ]}
          onChangeText={updateInputValueHandler.bind(this, "password")}
        ></TextInput>
        <View style={styles.buttonView}>
          <UiButton
            className="primary"
            isFullWidth={true}
            title="Login"
            onPress={submitHandler}
            isLoading={isAuthenticating}
          ></UiButton>
        </View>
        <View style={styles.hrContainer}>
          <View style={styles.hrLine}></View>
          <View style={styles.hrText}>
            <Text>or</Text>
          </View>
          <View style={styles.hrLine}></View>
        </View>
        <View style={styles.buttonView}>
          <UiButton
            className="flat"
            isFullWidth={true}
            title="Register as new user"
            onPress={() => {
              navigation.replace("SignupScreen");
            }}
          ></UiButton>
        </View>
        <View style={styles.linkView}>
          <UiLink
            title="Skip for now >>"
            onPress={() => {
              navigation.replace("HomeScreen");
            }}
          ></UiLink>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: "#E99695",
    alignItems: "center",
    paddingBottom: 4,
  },
  logoImage: {
    width: 256,
    height: 256,
  },
  inputContainer: {
    padding: 16,
    marginTop: 12,
  },
  inputText: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonView: {},
  hrContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  hrLine: {
    height: 1,
    backgroundColor: "#999",
    flex: 1,
  },
  hrText: {
    paddingHorizontal: 12,
    color: "#999",
  },
  linkView: {
    alignItems: "flex-end",
    marginTop: 24,
    paddingRight: 12,
  },
  inputInvalid: {
    backgroundColor: "#FFF9C4",
  },
});
