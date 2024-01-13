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
import Header from "../components/Header";
import { PrimaryButton, PrimaryTab } from "../components";
import Pickup from "./Pickup";
import Drop from "./Drop";
import theme from "../constants/theme";
import { Modal, Portal, PaperProvider } from "react-native-paper";

const TripSheetDetails = () => {
  const [activeTab, setActiveTab] = useState("PICK UP");

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    width: "70%",
    height: "auto",
    minHeight: '30%',
    // justifyContent: "center",
    // alignItems: "center",
    marginLeft: '15%',
    paddingHorizontal: 30,
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={styles.modalTitle}>Are you sure you want to Cancel pick up?</Text>
          <Text style={styles.reason}>Reason</Text>
          <PrimaryButton 
          text={"Directions"}

          />
        </Modal>
      </Portal>
      <View style={styles.container}>
        <Header title={"TRIP SHEET"} />
        <View style={styles.internalContainer}>
          <View>
            <TouchableOpacity
              style={{ padding: 20, backgroundColor: theme.colors.background }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.label}>Order ID</Text>
                  <Text style={styles.title}>UC002-2224</Text>
                </View>
                <View>
                  <Text style={styles.label}>Name</Text>
                  <Text style={styles.title}>Mansi Gupta</Text>
                </View>
                <View>
                  <Text style={styles.label}>Ph No</Text>
                  <Text style={styles.title}>123456789</Text>
                </View>
              </View>
              <View style={{ marginVertical: 20 }}>
                <Text style={styles.label}>Address</Text>
                <Text style={styles.title}>
                  A-182, Second Floor, Shivalik Colony, {"\n"}Malviya Nagar
                </Text>
              </View>
              <View style={{}}>
                <Text style={styles.label}>Sevices</Text>
                <Text style={styles.title}>Wash & Fold, Wash & Iron</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ padding: 20, backgroundColor: theme.colors.background }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: "red",
                    borderRadius: 40,
                    height: 60,
                    width: 60,
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={showModal}
                >
                  <Image
                    source={require("../../assets/Icons/cancel.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: "#666666",
                    borderRadius: 40,
                    height: 60,
                    width: 60,
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/Icons/reschedule.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 10,
                    backgroundColor: "#65BA0D",
                    borderRadius: 40,
                    height: 60,
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                  }}
                >
                  <Image
                    source={require("../../assets/Icons/challan.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          {/* {activeTab == "PICK UP" ? <Pickup /> : <Drop />} */}
        </View>
      </View>
    </PaperProvider>
  );
};

export default TripSheetDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {},
  internalContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  label: {
    fontSize: theme.fontSizes.xmd,
    color: theme.colors.primary_text,
  },
  title: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary_text,
    fontWeight: "500",
  },
  modalTitle:{
    fontSize: theme.fontSizes.md,
    color: theme.colors.primary_text,
    fontWeight: "500",
    textAlign: 'center',
    bottom: '28%'
  },
  reason:{
    bottom: '24%',
    // textAlign: 'center',
    // marginLeft: 14
    
  }
});
