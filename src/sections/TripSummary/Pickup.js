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
import { DetaillCard } from "../../components";
import theme from "../../constants/theme";

const Pickup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <DetaillCard
        title={"Todays Trips"}
        pickups={"Pickups"}
        totalPickups={"10"}
        rescheduled={"Rescheduled"}
        totalRescheduled={"8"}
        cancelled={"Cancelled"}
        totalCancelled={"6"}
      />
      <DetaillCard
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

export default Pickup;

const styles = StyleSheet.create({
  container: {},
  header: {},
  internalContainer: {},
});
