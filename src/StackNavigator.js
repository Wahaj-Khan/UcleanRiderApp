import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginContainer from "./LoginFlow/LoginContainer";
import ForgotContainer from "./ForgotFlow/ForgotContainer";
import SignupContainer from "./SignupFlow/SignupContainer";
import Verification from "./ForgotFlow/Verification";
import ResetPassword from "./ForgotFlow/ResetPassword";
import LoginSplash from "./Splash/LoginSplash";
import ResetSplash from "./Splash/ResetSplash";
import RegisterSplash from "./Splash/RegisterSplash";
import SetPassword from "./SignupFlow/SetPassword";
import SignupVerification from "./SignupFlow/SignupVerification";
import SelfDeclaration from "./LoginFlow/SelfDeclaration";
import SideDrawer from "./Drawer/SideDrawer";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginContainer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="forgot"
          component={ForgotContainer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signup"
          component={SignupContainer}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="verification"
          component={Verification}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="resetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="loginSplash"
          component={LoginSplash}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="resetSplash"
          component={ResetSplash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="registerSplash"
          component={RegisterSplash}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="signupVerification"
          component={SignupVerification}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="setPassword"
          component={SetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="selfDeclaration"
          component={SelfDeclaration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sideDrawer"
          component={SideDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
