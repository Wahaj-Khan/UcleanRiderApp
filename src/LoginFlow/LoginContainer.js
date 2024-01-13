import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginContainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "#003A25",
            marginHorizontal: 25,
          }}
        >
          Login
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#666666",
            marginHorizontal: 25,
          }}
        >
          Hi there, nice to see you
        </Text>

        <TextInput
          style={{
            backgroundColor: "#F1F2F6",
            borderRadius: 8,
            padding: 13,
            marginHorizontal: 20,
            marginVertical: 10,
            fontSize: 16,
          }}
          onChangeText={setUsername}
          value={username}
          placeholder="Login"
        />

        <TextInput
          style={{
            backgroundColor: "#F1F2F6",
            borderRadius: 8,
            padding: 13,
            marginHorizontal: 20,
            marginVertical: 10,
            fontSize: 16,
          }}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />

        <Pressable
          style={{
            backgroundColor: "#65BA0D",
            padding: 17,
            marginHorizontal: 20,
            borderRadius: 8,
            marginTop: 10,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("selfDeclaration")}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Continue
          </Text>
        </Pressable>

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginHorizontal: 30,
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "#666666", fontSize: 16 }}>
            Don't have a account ?
          </Text>
          <TouchableHighlight onPress={() => navigation.navigate("signup")}>
            <Text
              style={{
                textDecorationLine: "underline",
                fontSize: 16,
                color: "#65BA0D",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Sign Up
            </Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("forgot")}
        >
          <Text
            style={{
              textDecorationLine: "underline",
              fontSize: 16,
              color: "#65BA0D",
              fontWeight: "bold",
            }}
          >
            Forgot Password
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LoginContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});
