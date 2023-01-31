import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [emailAddress, setEmailAddress] = useState();

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const storedEmail = await AsyncStorage.getItem("email");

      if (storedToken) {
        setAuthToken(storedToken);
      }
      if (storedEmail) {
        setEmailAddress(storedEmail);
      }
    }

    fetchToken();
  }, []);

  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  }

  function setEmail(email) {
    setEmailAddress(email);
    AsyncStorage.setItem("email", email);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.clear();
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    email: emailAddress,
    authenticate: authenticate,
    setEmail: setEmail,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
