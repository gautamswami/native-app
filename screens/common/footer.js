import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.flex}>
      <Pressable>
        <Text style={styles.textWhite}>HOME</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.textWhite}>MESSAGE</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.textWhite}>ANONYMOUS</Text>
      </Pressable>
      <Pressable onPress={()=>localStorage.setItem('login',false)}>
        <Text style={styles.textWhite}>Logout</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  flex: {
    display: "flex",
    flexDirection: "row",
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: 99,
    backgroundColor: "black",
  },
  textWhite:{
    color:'#ffff'
  }
});
