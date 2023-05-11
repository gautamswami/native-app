import React, { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";

export default function SignupPart() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = () => {
    localStorage.setItem('login',true)
    navigate("/home");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <Pressable style={styles.button} onPress={() => handleSignup()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 1,
    color: "#464646",
    borderBottomColor: "#EAEAF5",
    borderBottomWidth: 1,
    outlineStyle: "none",
    padding: "3%",
    marginBottom: "20px",
  },
  container: {
    paddingTop: "20px",
  },
  button: {
    width: 225,
    height: 44,
    backgroundColor: "#5173DB",
    borderRadius: 39,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    color: "#FFFFFF",
  },
});
