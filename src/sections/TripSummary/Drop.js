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

const Drop = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <DetaillCard
        title={"Todays Trips"}
        pickups={"COD Drops (11)"}
        totalPickups={"₹ 2,219"}
        rescheduled={"Pre-paid Drops (8)"}
        totalRescheduled={"₹ 2,219"}
        cancelled={"Rescheduled"}
        totalCancelled={"1"}
      />
      <DetaillCard
        dateVisibility={true}
        title={"Monthly Trips"}
        pickups={"COD Drops (11)"}
        totalPickups={"₹ 2,219"}
        date={"June 2023"}
        rescheduled={"Pre-paid Drops (8)"}
        totalRescheduled={"₹ 2,219"}
        cancelled={"Rescheduled"}
        totalCancelled={"1"}
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
