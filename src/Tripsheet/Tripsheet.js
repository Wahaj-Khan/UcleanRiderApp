import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { PrimaryTab } from "../components";
import Pickup from "./Pickup";
import Drop from "./Drop";

const Tripsheet = () => {
  const [activeTab, setActiveTab] = useState("PICK UP");
  // const [showPickupDetails, setShowPickupDetails] = useState(false);
  // const [showDropDetails, setShowDropDetails] = useState(false);

  
  // const listTab = [{ status: "PICK UP" }, { status: "DROP" }];
  
  // const [status, setStatus] = useState("All");
  // const setStatusFilter = (status) => {
  //   setStatus(status);

  //   // Show/hide details based on the selected tab
  //   if (status === "PICK UP") {
  //     setShowPickupDetails(true);
  //     setShowDropDetails(false);
  //   } else if (status === "DROP") {
  //     setShowDropDetails(true);
  //     setShowPickupDetails(false);
  //   }
  // };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header title={"TRIP SHEET"} />
      <View style={styles.internalContainer}>
        <PrimaryTab
          title1={"PICK UP"}
          title2={"DROP"}
          active={activeTab}
          onPressFirstTab={() => setActiveTab("PICK UP")}
          onPressSecondTab={() => setActiveTab("DROP")}
        />
        {activeTab == "PICK UP" ? <Pickup /> : <Drop />}
      </View>
    </View>
  );
};

export default Tripsheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  body: {},
  listTab: {
    backgroundColor: "#E2E2E2",
    alignSelf: "center",
    flexDirection: "row",
  },
  btnTab: {
    width: Dimensions.get("window").width / 2,
    flexDirection: "row",
    borderColor: "#EBEBEB",
    padding: 15,
    justifyContent: "center",
  },
  textTab: {
    fontSize: 22,
    color: "#053B26",
    fontWeight: "500",
  },
  btnTabActive: {
    backgroundColor: "#65BA0D",
  },
  textTabActive: {
    color: "#FFFFFF",
  },
});
