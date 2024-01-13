import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomCheckbox = (props) => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
    props.onChange(!checked);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container,props.style]}>
        {checked && (
          <View style={[styles.checked,props.checked]}>
            <Text style={[styles.checkMark,props.checkMark]}>✓</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#65BA0D",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
  checked: {
    width: 30,
    height: 30,
    borderRadius: 4,
    backgroundColor: "#65BA0D",
    justifyContent: "center",
    alignItems: "center",
  },
  checkMark: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default CustomCheckbox;
