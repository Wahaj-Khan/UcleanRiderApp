import { Image, StyleSheet, Text, View } from "react-native";

export default function PasswordChanged({ navigation }) {
  setTimeout(() => {
    navigation.navigate("login");
  }, 1000);

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/successfully.png")} />
      <Text style={styles.title}>Register Successfully</Text>
      <Text style={styles.text}>Redirecting you to Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003a26",
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    color: "#65BA0D",
    fontSize: 16,
    marginTop: 40,
  },
});
