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

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Svg
              width="28"
              height="24"
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M28 24V21H0V24H28ZM28 13.5V10.5H0V13.5H28ZM14 3V0H0V3H14Z"
                fill="white"
              />
              <Path
                d="M21.5641 3.26447L21.7743 3.4709L24.4204 6.09636C24.4657 6.1414 24.5358 6.1414 24.5811 6.09636L27.2272 3.4709L27.4374 3.26447C28.1875 2.51755 28.1875 1.3071 27.4374 0.562064H27.4333C26.6811 -0.186727 25.4611 -0.186729 24.711 0.560186L24.5008 0.770372L24.2906 0.560186C23.5384 -0.186729 22.3205 -0.186729 21.5683 0.560186H21.5641C20.812 1.30898 20.812 2.51943 21.5641 3.26634V3.26447Z"
                fill="white"
              />
            </Svg>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 16, marginRight: 5 }}>
              {props.title}
            </Text>
            {/* <Svg
              width="18"
              height="8"
              viewBox="0 0 18 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path d="M8.66667 8L0 0H17.3333L8.66667 8Z" fill="white" />
            </Svg> */}
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons name="refresh" size={35} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchSort}>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search.."
              placeholderTextColor="#383535"
            />
            <Icon
              name="search"
              size={14}
              color="#999"
              style={styles.searchIcon}
            />
          </View>
          <TouchableOpacity style={{ marginLeft: 25, marginTop: 7 }}>
            <Svg
              width="28"
              height="24"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M0 16V14H6.66667V16H0ZM0 9V7H13.3333V9H0ZM0 2V0H20V2H0Z"
                fill="white"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: "#053B26",
    justifyContent: "center",
    height: 155,
  },
  headerIcon: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  searchSort: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
  },
  searchBarContainer: {
    backgroundColor: "#fff",
    height: 36,
    width: "75%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
