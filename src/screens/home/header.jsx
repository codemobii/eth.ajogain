import {
  View,
  ImageBackground,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import React from "react";
import { MainLayout } from "../../layouts";
import { Button, Link, Text } from "../../components";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TouchableNativeFeedback } from "react-native-web";

export default function Header() {
  const cta = [
    {
      title: "Save",
      icon: "pie-chart",
      onPress: () => {},
      color: "#fff",
    },
    {
      title: "Recieve",
      icon: "arrow-down-left",
      onPress: () => {},
      color: "#fff",
    },
    {
      title: "Send",
      icon: "arrow-up-right",
      onPress: () => {},
      color: "#fff",
    },
  ];

  const navigation = useNavigation();

  return (
    <>
      <ImageBackground
        source={{
          uri: "https://abeg.app/_next/static/media/wavy-bg-black.72ada49b.png",
        }}
        resizeMethod="scale"
        resizeMode="cover"
        style={styles.walletContainer}
      >
        <Ionicons name="eye-off-outline" size={24} color="#fff" />
        <View style={{ marginLeft: 15 }}>
          <Text color="#fff">Total Balance</Text>
          <Text
            fontWeight="bold"
            color="#fff"
            style={{ fontSize: 30, marginTop: 5 }}
          >
            $2,595.49
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 40,
        }}
      >
        {cta.map((item, index) => (
          <Pressable key={index} style={{ flex: 0.3, alignItems: "center" }}>
            <View
              style={[
                {
                  backgroundColor: item.color,
                },
                styles.cta_button,
              ]}
            >
              <Feather name={item?.icon} size={28} color="black" />
            </View>
            <Text fontWeight="500">{item?.title}</Text>
          </Pressable>
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text fontWeight="500">Recent Transactions</Text>

        <Link>View all</Link>
      </View>
    </>
  );
}
