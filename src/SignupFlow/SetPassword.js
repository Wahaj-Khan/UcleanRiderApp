import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SetPassword = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "#003A25",
          marginHorizontal: 25,
        }}
      >
        Set Password
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
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
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
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm Password"
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
        onPress={() => navigation.navigate("registerSplash")}
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
    </View>
  );
};

export default SetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
});
