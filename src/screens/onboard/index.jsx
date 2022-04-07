import { View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import { Text, Button } from "../../components";
import { StatusBar } from "expo-status-bar";

export function OnboardScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../../assets/images/onboard.png")}
      style={styles.container}
    >
      <StatusBar style="light" hidden />
      <View>
        <Text color="#fff" fontWeight="bold" style={{ fontSize: 40 }}>
          Where Everyone Can Get Save
        </Text>

        <Text
          color="#fff"
          fontWeight="500"
          style={{
            lineHeight: 25,
            fontSize: 15,
            marginVertical: 20,
          }}
        >
          Commission-free investing, plus the tools you need to put your money
          in motion. Get started with your free account.
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: 150 }}>
            <Button onPress={() => navigation.navigate("Register")}>
              Get Started
            </Button>
          </View>

          <View style={{ width: 150 }}>
            <Button
              background="#000"
              color="#fff"
              onPress={() => navigation.navigate("Login")}
            >
              Sign In
            </Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
