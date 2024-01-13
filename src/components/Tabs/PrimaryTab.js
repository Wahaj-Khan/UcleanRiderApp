import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import theme from "../../constants/theme";

const PrimaryTab = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPressFirstTab} style={props.active == props.title1 ? styles.activeTab : styles.inActiveTab}>
        <Text style={props.active == props.title1 ? styles.activeTitle : styles.inActiveTitle}>{props.title1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressSecondTab} style={props.active == props.title2 ? styles.activeTab : styles.inActiveTab}>
        <Text style={props.active == props.title2 ? styles.activeTitle : styles.inActiveTitle}>{props.title2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryTab;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: theme.colors.secondary,
    height:60,
    alignItems:"center"
  },
  activeTab: {
    width: "50%",
    padding: 10,
    backgroundColor: theme.colors.light_primary,
    height:'100%',
    alignItems:"center",
    justifyContent:"center"
  },
  inActiveTab: {
    width: "50%",
    padding: 10,
    backgroundColor: theme.colors.secondary,
    height:'100%',
    alignItems:"center",
    justifyContent:"center"
  },
  activeTitle: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.background,
    textAlign: "center",
    fontWeight: "bold",
  },
  inActiveTitle: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary,
    textAlign: "center",
    fontWeight: "bold",
  },
});
