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
import { Drop, Pickup } from "../sections";
import theme from "../constants/theme";

const TripSummary = () => {
  const [activeTab, setActiveTab] = useState("PICK UP");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header title={"TRIP SUMMARY"} />
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

export default TripSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
  header: {},
  internalContainer: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
});
