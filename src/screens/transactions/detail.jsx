import { View, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { MainLayout } from "../../layouts";
import styles from "./styles";
import { Button, Link, Text } from "../../components";

const stat = [
  {
    title: "Token",
    value: "SOL (Solana)",
  },
  {
    title: "Amount",
    value: "$542.00",
  },
  {
    title: "Date",
    value: "12/12/2020",
  },
  {
    title: "Payment Method",
    value: "Credit Card",
  },
  {
    title: "Fees",
    value: "$0.00",
  },
  {
    title: "Sessionb ID",
    value: "SESSIONB-ID-12345",
  },
];

export function TransactionDetailScreen() {
  return (
    <MainLayout isBack={true} title={"Transaction"}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={[styles.descImageContainer, { backgroundColor: "#fff" }]}
          >
            <Image
              source={{
                uri: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
              }}
              style={styles.descImage}
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                fontWeight="500"
                style={[{ fontSize: 10 }, styles.grayText]}
              >
                Wallet
              </Text>

              <Entypo name="dot-single" size={18} color="#ccc" />

              <Text
                fontWeight="500"
                style={[{ fontSize: 10 }, styles.grayText]}
              >
                SOL
              </Text>
            </View>

            <Text
              style={{
                fontSize: 15,
                marginTop: 2,
              }}
              fontWeight="bold"
            >
              $542.00
            </Text>
          </View>
        </View>

        <Link>Share Transaction</Link>
      </View>

      <View style={{ marginVertical: 20 }}>
        {stat.map((item, index) => (
          <View
            key={index}
            style={[
              {
                marginVertical: 5,
                padding: 10,
                borderRadius: 5,
                backgroundColor: "#fff",

                // borderBottomColor: "#ccc",
                // borderBottomWidth: 1,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 13,
                marginBottom: 5,
              }}
              color="gray"
              fontWeight="500"
            >
              {item.title}
            </Text>

            <Text
              style={{
                fontSize: 15,
              }}
              fontWeight="bold"
            >
              {item.value}
            </Text>
          </View>
        ))}
      </View>

      <View>
        <Button>Report Transaction</Button>
      </View>
    </MainLayout>
  );
}
