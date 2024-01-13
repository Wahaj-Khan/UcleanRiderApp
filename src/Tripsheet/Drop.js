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
import { SheetDetail } from "../components";
import theme from "../constants/theme";

const Drop = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SheetDetail
        title={"Todays Trips"}
        pickups={"Pickups"}
        totalPickups={"10"}
        rescheduled={"Rescheduled"}
        totalRescheduled={"8"}
        cancelled={"Cancelled"}
        totalCancelled={"6"}
        priority={true}
      />
      <SheetDetail
        dateVisibility={true}
        title={"Monthly Trips"}
        pickups={"Pickups"}
        totalPickups={"10"}
        date={"June 2023"}
        rescheduled={"Rescheduled"}
        totalRescheduled={"8"}
        cancelled={"Cancelled"}
        totalCancelled={"6"}
      />
    </View>
  );
};

export default Drop;

const styles = StyleSheet.create({
  container: {},
  header: {},
  internalContainer: {},
});
