import { StyleSheet } from "react-native";
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import HOME from "./screens/home/home";
import Login from "./screens/login/login";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<HOME />} />
        <Route path="/home" element={<HOME />} />
        <Route path="/profile" element={<HOME />} />
      </Routes>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
