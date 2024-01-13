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

const DetaillCard = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>{props.title}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {props.dateVisibility == true ? (
            <>
              <Image
                style={{ width: "10%", height: "70%" }}
                source={require("../../../assets/Icons/left-arrow.png")}
                resizeMode="contain"
              />
              <Text style={[styles.title, { marginHorizontal: 10 }]}>
                {props.date}
              </Text>
              <Image
                style={{ width: "12%", height: "80%" }}
                source={require("../../../assets/Icons/right-arrow-angle.png")}
                resizeMode="contain"
              />
            </>
          ) : (
            <Text style={[styles.title, { marginHorizontal: 10 }]}>
              {props.date}
            </Text>
          )}
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text style={styles.label}>{props.pickups}</Text>
        <Text style={styles.value}>{props.totalPickups}</Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text style={styles.label}>{props.rescheduled}</Text>
        <Text style={styles.value}>{props.totalRescheduled}</Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text style={styles.label}>{props.cancelled}</Text>
        <Text style={styles.value}>{props.totalCancelled}</Text>
      </View>
    </View>
  );
};

export default DetaillCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    backgroundColor: theme.colors.background,
    paddingVertical:30
  },
  title: {
    fontSize: theme.fontSizes.lg,
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  label: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary_text,
  },
  value: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary_text,
    fontWeight: "bold",
  },
});
