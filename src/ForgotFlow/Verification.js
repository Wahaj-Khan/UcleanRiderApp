import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Verification = () => {
  const otpInputs = Array(4).fill(null);
  const inputRefs = otpInputs.map(() => useRef());
  const [otp, setOtp] = useState("");
  const navigation = useNavigation();

  const handleInputChange = (value, index) => {
    const newOtp = otp.split("");
    newOtp[index] = value;
    setOtp(newOtp.join(""));
    if (index < otpInputs.length - 1 && value) {
      inputRefs[index + 1].current.focus();
    }
  };
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
        Verification
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "#666666",
          marginHorizontal: 25,
          marginVertical: 10,
        }}
      >
        Please enter OTP received on your registered mobile number - *******232
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: "#65BA0D",
          margin: 10,
        }}
      >
        {otpInputs.map((_, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange(text, index)}
            value={otp[index] || ""}
            secureTextEntry
          />
        ))}
      </View>
      <Text
        style={{
          fontSize: 16,
          color: "#666666",
          marginVertical: 10,
          textAlign:'center'
        }}
      >
       Didn’t Received the OTP?
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Feather name="refresh-ccw" size={24} color="#8C9091" />
        <TouchableHighlight style={{ alignItems: "center" }}>
          <Text
            style={{
              textDecorationLine: "underline",
              fontSize: 16,
              color: "#65BA0D",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Resend OTP
          </Text>
        </TouchableHighlight>
      </View>

      <Pressable
        style={{
          backgroundColor: "#65BA0D",
          padding: 17,
          marginHorizontal: 20,
          borderRadius: 8,
          marginTop: 10,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate("resetPassword")}
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

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#65BA0D",
    borderRadius: 8,
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
