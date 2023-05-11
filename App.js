import { SafeAreaView, StyleSheet } from "react-native";
import { NativeRouter, Route, Routes, Link } from "react-router-native";
import HOME from "./screens/home/home";
import Login from "./screens/login";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <Routes>
          <Route
            path="/"
            element={!localStorage.getItem("login")==false ? <Login /> : <HOME />}
          />
          <Route path="/home" element={<HOME />} />
          <Route path="/profile" element={<HOME />} />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
