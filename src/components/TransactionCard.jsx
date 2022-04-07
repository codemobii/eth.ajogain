import { View, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text } from "./";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export function TransactionCard({ item }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      onPress={() => navigation.navigate("TransactionDetail", { item })}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: item,
          }}
          style={{
            height: 30,
            width: 30,
            resizeMode: "contain",
            borderRadius: 5,
            overflow: "hidden",
            marginRight: 10,
          }}
        />

        <View>
          <Text
            style={{
              fontSize: 15,
              marginTop: 2,
            }}
            fontWeight="500"
          >
            Funded wallet
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text fontWeight="500" style={[{ fontSize: 10 }, styles.grayText]}>
              Wallet
            </Text>

            <Entypo name="dot-single" size={18} color="#ccc" />

            <Text fontWeight="500" style={[{ fontSize: 10 }, styles.grayText]}>
              2nd March, 2022
            </Text>
          </View>
        </View>
      </View>

      <Text
        style={{
          fontSize: 15,
        }}
        fontWeight="500"
      >
        $245.33
      </Text>
    </Pressable>
  );
}
