import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./src/StackNavigator";

export default function App() {
  return <StackNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /* <View style={styles.header}>
        <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Self Declaration</Text>
      </View> */
}
