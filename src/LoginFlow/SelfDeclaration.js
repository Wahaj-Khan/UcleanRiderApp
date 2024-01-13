import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import CustomCheckbox from "../../components/CustomCheckbox";
import { useNavigation } from "@react-navigation/native";

const SelfDeclaration = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const navigation = useNavigation();

  const continueButtonHandler = () => {
    if (checked1 && checked2 && checked3 && checked4 && checked5) {
      navigation.navigate("sideDrawer");
    } else {
      alert("Please check all the sections");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Self Declaration</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Image
            style={styles.img}
            source={require("../../assets/SelfDeclarationIcon/hand.png")}
          />
          <Text style={styles.text}>Regular use hand wash and sanitizer</Text>
          <CustomCheckbox
            value={checked1}
            onChange={() => setChecked1(!checked1)}
          />
        </View>
        <View style={styles.section}>
          <Image
            style={styles.img}
            source={require("../../assets/SelfDeclarationIcon/cloth.png")}
          />
          <Text style={styles.text}>
            Maintain personal hygiene, wear clean cloths
          </Text>
          <CustomCheckbox
            value={checked2}
            onChange={() => setChecked2(!checked2)}
          />
        </View>
        <View style={styles.section}>
          <Image
            style={styles.img}
            source={require("../../assets/SelfDeclarationIcon/distance.png")}
          />
          <Text style={styles.text}>
            Avoid crowding and maintain social distancing of 6 feet
          </Text>
          <CustomCheckbox
            value={checked3}
            onChange={() => setChecked3(!checked3)}
          />
        </View>
        <View style={styles.section}>
          <Image
            style={styles.img}
            source={require("../../assets/SelfDeclarationIcon/thermo.png")}
          />
          <Text style={styles.text}>
            Check body temperature, do periodic thermal testing as required
          </Text>
          <CustomCheckbox
            value={checked4}
            onChange={() => setChecked4(!checked4)}
          />
        </View>

        <View style={styles.section}>
          <Image
            style={styles.img}
            source={require("../../assets/SelfDeclarationIcon/facemask.png")}
          />
          <Text style={styles.text}>
            Use all personal equipment as directed
          </Text>
          <CustomCheckbox
            value={checked5}
            onChange={() => setChecked5(!checked5)}
          />
        </View>

        <Text style={{ fontSize: 14, marginHorizontal: 17 }}>
          Always place the health and safety of all people & customers at
          highest priority
        </Text>
      </View>

      <View style={styles.footer}>
        <Pressable
          style={{
            backgroundColor: "#65BA0D",
            padding: 17,
            marginHorizontal: 20,
            borderRadius: 8,
            marginTop: 10,
            marginBottom: 20,
          }}
          onPress={continueButtonHandler}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F5FF",
  },
  header: {
    flex: 0.15,
    paddingLeft: 20,
    justifyContent: "center",
    backgroundColor: "#003A25",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 30,
  },
  body: {
    flex: 1,
    paddingVertical: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#FFF",
    paddingVertical: 10,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  img: {
    marginLeft: 10,
  },
  footer: {
    padding: 20,
    marginBottom: 20,
  },
});

export default SelfDeclaration;
