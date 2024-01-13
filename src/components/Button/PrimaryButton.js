import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

const PrimaryButton = (props) => {
  return (
    <Pressable
      style={[styles.container, props.container]}
      //   onPress={() => navigation.navigate("selfDeclaration")}
    >
      {props.iconVisible ==true  ? 
      <Image source={props.icon} style={{ width: 20, height: 20, marginRight: 4 }} />

      :
null

      }
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#65BA0D",
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'

  },
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16
  },
});

export default PrimaryButton;
