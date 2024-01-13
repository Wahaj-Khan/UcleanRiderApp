import {
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import theme from "../../constants/theme";
import CustomCheckbox from "../../../components/CustomCheckbox";
import { PrimaryButton } from "../../components";

const SheetDetail = (props) => {
  const [checked1, setChecked1] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <CustomCheckbox
              value={checked1}
              onChange={() => setChecked1(!checked1)}
              style={styles.checkbox}
              checked={styles.checked}
              checkMark={styles.checkMark}
            />
          </View>
          <Text style={styles.title}>UC002-2224</Text>
          <PrimaryButton
          container={styles.btnContainer2}
          textStyle={styles.btntext2}
          iconVisible={false}
          text={"Pre-paid"}
          // icon={require("../../../assets/Icons/call.png")}
        />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {props.priority && (
            <TouchableOpacity
             onPress={()=>navigation.navigate('TripSheetDetails')}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
              }}
            >
              <Image
                source={require("../../../assets/Icons/flag.png")}
                style={{ width: 18, height: 18 }}
              />
              <Text style={styles.priority}>Priority</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          marginHorizontal: 35,
          marginTop: 10,
        }}
      >
        <Image
          source={require("../../../assets/Icons/profile.png")}
          style={{ width: 16, height: 16 }}
        />
        <Text style={styles.label}>Mansi Gupta</Text>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          marginHorizontal: 35,
          marginTop: 10,
        }}
      >
        <Image
          source={require("../../../assets/Icons/pin.png")}
          style={{ width: 16, height: 16 }}
        />
        <Text style={styles.label}>
          A-182, Second Floor, Shivalik Colony, {"\n"}Malviya Nagar
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 35,
          marginTop: 10,
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../../assets/Icons/clock.png")}
            style={{ width: 16, height: 16 }}
          />
          <Text style={styles.label}>9 Am - 11 Am</Text>
        </View>
        <View
          style={{
            justifyContent: "flex-start",
            flexDirection: "row",
            left: -20,
          }}
        >
          <Image
            source={require("../../../assets/Icons/telephone.png")}
            style={{ width: 16, height: 16 }}
          />
          <Text style={styles.label}>+91 9955 45 5361</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
          marginHorizontal: 35,
          marginTop: 10,
        }}
      >
        <Image
          source={require("../../../assets/Icons/setting.png")}
          style={{ width: 16, height: 16 }}
        />
        <Text style={styles.label}>
          Wash & Fold, Wash & Iron, & Steam Press{" "}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-evenly",
          flexDirection: "row",
          marginHorizontal: "5%",
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <PrimaryButton
          container={styles.whiteContainer}
          textStyle={styles.greenText}
          text={"Directions"}
          icon={require("../../../assets/Icons/send.png")}
        />
        <PrimaryButton
          container={styles.btnContainer}
          textStyle={styles.btntext}
          iconVisible={false}
          text={"Confirm Drop"}
          // icon={require("../../../assets/Icons/call.png")}
        />
      </View>
    </View>
  );
};

export default SheetDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    backgroundColor: theme.colors.background,
    paddingVertical: 30,
  },
  title: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.light_primary,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  priority: {
    fontSize: theme.fontSizes.md,
    color: "#FF2F07",
    fontWeight: "bold",
    left: 2,
  },
  label: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.primary_text,
    left: 6,
  },
  value: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary_text,
    fontWeight: "bold",
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: "#65BA0D",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },
  checked: {
    width: 22,
    height: 22,
    borderRadius: 4,
    backgroundColor: "#65BA0D",
    justifyContent: "center",
    alignItems: "center",
  },
  checkMark: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  btnContainer: {
    backgroundColor: "#65BA0D",
    paddingHorizontal: "5%",
    paddingVertical: 8,
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    width: "52%",
  },
  btnContainer2: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: "5%",
    paddingVertical: 4,
    borderRadius: 8,
    width: "30%",
    marginTop:-0
  },
  btntext2: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 10,
  },
  whiteContainer: {
    backgroundColor: "#ffffff",
    paddingHorizontal: "5%",
    borderWidth: 2,
    borderColor: "#65BA0D",
    paddingVertical: 6,
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    width: "52%",
  },
  btntext: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  greenText: {
    color: "#65BA0D",
    fontWeight: "bold",
    fontSize: 16,
  },
});
