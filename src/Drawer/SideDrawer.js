import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tripsheet from "../Tripsheet/Tripsheet";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import TripSummary from "../TripSummary/TripSummary";
import TripSheetDetails from "../Tripsheet/TripSheetDetails";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const handleButtonPress = (screen) => {
    props.navigation.closeDrawer();
    props.navigation.navigate(screen);
  };

  const navigtation = useNavigation();

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={require("../../assets/SelfDeclarationIcon/avatarProfile.png")}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>User name</Text>
            <Text style={styles.userId}>UC002</Text>
          </View>
          <Text style={styles.userMobile}>+91 9999 777 333</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleButtonPress("Tripsheet")}
      >
        <Svg
          width="19"
          height="24"
          viewBox="0 0 19 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M4.72031 18.9H14.2797V17.1H4.72031V18.9ZM4.72031 13.8H14.2797V12H4.72031V13.8ZM1.78125 24C1.30625 24 0.890625 23.82 0.534375 23.46C0.178125 23.1 0 22.68 0 22.2V1.8C0 1.32 0.178125 0.9 0.534375 0.54C0.890625 0.18 1.30625 0 1.78125 0H12.4984L19 6.57V22.2C19 22.68 18.8219 23.1 18.4656 23.46C18.1094 23.82 17.6938 24 17.2188 24H1.78125ZM11.6078 7.38V1.8H1.78125V22.2H17.2188V7.38H11.6078Z"
            fill="#484A4D"
          />
        </Svg>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>Trip Sheet</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleButtonPress("TripSummary")}
      >
        <Svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M5.775 7.3C6.01944 7.3 6.23333 7.2 6.41667 7C6.6 6.8 6.69167 6.56667 6.69167 6.3C6.69167 6.03333 6.6 5.8 6.41667 5.6C6.23333 5.4 6.01944 5.3 5.775 5.3C5.53056 5.3 5.31667 5.4 5.13333 5.6C4.95 5.8 4.85833 6.03333 4.85833 6.3C4.85833 6.56667 4.95 6.8 5.13333 7C5.31667 7.2 5.53056 7.3 5.775 7.3ZM5.775 13C6.01944 13 6.23333 12.9 6.41667 12.7C6.6 12.5 6.69167 12.2667 6.69167 12C6.69167 11.7333 6.6 11.5 6.41667 11.3C6.23333 11.1 6.01944 11 5.775 11C5.53056 11 5.31667 11.1 5.13333 11.3C4.95 11.5 4.85833 11.7333 4.85833 12C4.85833 12.2667 4.95 12.5 5.13333 12.7C5.31667 12.9 5.53056 13 5.775 13ZM5.775 18.7C6.01944 18.7 6.23333 18.6 6.41667 18.4C6.6 18.2 6.69167 17.9667 6.69167 17.7C6.69167 17.4333 6.6 17.2 6.41667 17C6.23333 16.8 6.01944 16.7 5.775 16.7C5.53056 16.7 5.31667 16.8 5.13333 17C4.95 17.2 4.85833 17.4333 4.85833 17.7C4.85833 17.9667 4.95 18.2 5.13333 18.4C5.31667 18.6 5.53056 18.7 5.775 18.7ZM1.83333 24C1.34444 24 0.916667 23.8 0.55 23.4C0.183333 23 0 22.5333 0 22V2C0 1.46667 0.183333 1 0.55 0.6C0.916667 0.2 1.34444 0 1.83333 0H15.95L22 6.6V22C22 22.5333 21.8167 23 21.45 23.4C21.0833 23.8 20.6556 24 20.1667 24H1.83333ZM1.83333 22H20.1667V7.7143H14.9417V2H1.83333V22Z"
            fill="black"
            fill-opacity="0.7"
          />
        </Svg>

        <Text style={{ fontSize: 16, marginLeft: 20 }}>Trip Summary</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => handleButtonPress("ChangeLanguage")}
      >
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M12 24C10.32 24 8.75 23.685 7.29 23.055C5.83 22.425 4.56 21.57 3.48 20.49C2.4 19.41 1.55 18.135 0.93 16.665C0.31 15.195 0 13.62 0 11.94C0 10.26 0.31 8.695 0.93 7.245C1.55 5.795 2.4 4.53 3.48 3.45C4.56 2.37 5.83 1.525 7.29 0.915C8.75 0.305 10.32 0 12 0C13.68 0 15.25 0.305 16.71 0.915C18.17 1.525 19.44 2.37 20.52 3.45C21.6 4.53 22.45 5.795 23.07 7.245C23.69 8.695 24 10.26 24 11.94C24 13.62 23.69 15.195 23.07 16.665C22.45 18.135 21.6 19.41 20.52 20.49C19.44 21.57 18.17 22.425 16.71 23.055C15.25 23.685 13.68 24 12 24ZM12 22.26C12.7 21.54 13.285 20.715 13.755 19.785C14.225 18.855 14.61 17.75 14.91 16.47H9.12C9.4 17.67 9.775 18.75 10.245 19.71C10.715 20.67 11.3 21.52 12 22.26ZM9.45 21.9C8.95 21.14 8.52 20.32 8.16 19.44C7.8 18.56 7.5 17.57 7.26 16.47H2.76C3.52 17.89 4.4 19.005 5.4 19.815C6.4 20.625 7.75 21.32 9.45 21.9ZM14.58 21.87C16.02 21.41 17.315 20.72 18.465 19.8C19.615 18.88 20.54 17.77 21.24 16.47H16.77C16.51 17.55 16.205 18.53 15.855 19.41C15.505 20.29 15.08 21.11 14.58 21.87ZM2.16 14.67H6.93C6.87 14.13 6.835 13.645 6.825 13.215C6.815 12.785 6.81 12.36 6.81 11.94C6.81 11.44 6.82 10.995 6.84 10.605C6.86 10.215 6.9 9.78 6.96 9.3H2.16C2.02 9.78 1.925 10.21 1.875 10.59C1.825 10.97 1.8 11.42 1.8 11.94C1.8 12.46 1.825 12.925 1.875 13.335C1.925 13.745 2.02 14.19 2.16 14.67ZM8.79 14.67H15.24C15.32 14.05 15.37 13.545 15.39 13.155C15.41 12.765 15.42 12.36 15.42 11.94C15.42 11.54 15.41 11.155 15.39 10.785C15.37 10.415 15.32 9.92 15.24 9.3H8.79C8.71 9.92 8.66 10.415 8.64 10.785C8.62 11.155 8.61 11.54 8.61 11.94C8.61 12.36 8.62 12.765 8.64 13.155C8.66 13.545 8.71 14.05 8.79 14.67ZM17.04 14.67H21.84C21.98 14.19 22.075 13.745 22.125 13.335C22.175 12.925 22.2 12.46 22.2 11.94C22.2 11.42 22.175 10.97 22.125 10.59C22.075 10.21 21.98 9.78 21.84 9.3H17.07C17.13 10 17.17 10.535 17.19 10.905C17.21 11.275 17.22 11.62 17.22 11.94C17.22 12.38 17.205 12.795 17.175 13.185C17.145 13.575 17.1 14.07 17.04 14.67ZM16.74 7.5H21.24C20.58 6.12 19.675 4.97 18.525 4.05C17.375 3.13 16.05 2.48 14.55 2.1C15.05 2.84 15.475 3.64 15.825 4.5C16.175 5.36 16.48 6.36 16.74 7.5ZM9.12 7.5H14.94C14.72 6.44 14.35 5.415 13.83 4.425C13.31 3.435 12.7 2.56 12 1.8C11.36 2.34 10.82 3.05 10.38 3.93C9.94 4.81 9.52 6 9.12 7.5ZM2.76 7.5H7.29C7.51 6.42 7.79 5.455 8.13 4.605C8.47 3.755 8.9 2.93 9.42 2.13C7.92 2.51 6.61 3.15 5.49 4.05C4.37 4.95 3.46 6.1 2.76 7.5Z"
            fill="black"
            fill-opacity="0.7"
          />
        </Svg>
        <Text style={{ fontSize: 16, marginLeft: 20 }}>Change Language</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigtation.navigate("login")}
      >
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M2 24C1.46667 24 1 23.8 0.6 23.4C0.2 23 0 22.5333 0 22V2C0 1.46667 0.2 1 0.6 0.6C1 0.2 1.46667 0 2 0H11.7V2H2V22H11.7V24H2ZM18.2 17.8333L16.7667 16.4L20.1667 13H8.5V11H20.1L16.7 7.6L18.1333 6.16667L24 12.0333L18.2 17.8333Z"
            fill="black"
            fill-opacity="0.7"
          />
        </Svg>

        <Text style={{ fontSize: 16, marginLeft: 20 }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

function ChangeLanguage() {
  return (
    <View style={styles.screenContainer}>
      <Text>ChangeLanguage</Text>
    </View>
  );
}

function LogOut() {
  return (
    <View>
      <Text>Log out</Text>
    </View>
  );
}

const SideDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Tripsheet"
    >
      <Drawer.Screen
        name="Tripsheet"
        component={Tripsheet}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="TripSheetDetails"
        component={TripSheetDetails}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="TripSummary"
        component={TripSummary}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ChangeLanguage"
        component={ChangeLanguage}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="LogOut"
        component={LogOut}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    backgroundColor: "#053B26",
  },
  headerContent: {
    marginLeft: 20,
  },
  avatar: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: "#65BA0D",
    borderRadius: 29,
    marginTop: 50,
  },
  userInfo: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
  },
  userId: {
    fontSize: 18,
    color: "#FFFFFF",
    marginRight: 15,
  },
  userMobile: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 10,
  },
  drawerItem: {
    flexDirection: "row",
    padding: 15,
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SideDrawer;
