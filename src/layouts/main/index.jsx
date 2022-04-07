import { Animated, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../utils";
import styles from "./styles";
import { Text } from "../../components";

export function MainLayout({
  title = null,
  children,
  isBack = false,
  button = null,
  loading = false,
  loadingText = "Loading...",
}) {
  const navigation = useNavigation();

  const yOffset = useRef(new Animated.Value(0)).current;
  const height = yOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [isBack ? 50 : 0, 50],
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1, paddingTop: 36 }}>
      <StatusBar style="dark" hidden={false} />

      <Animated.View
        style={[
          {
            height: height,
          },
          styles.header,
        ]}
      >
        {isBack && (
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </Pressable>
        )}

        <Animated.Text style={{ fontFamily: theme.fonts.bold, fontSize: 16 }}>
          {title}
        </Animated.Text>
      </Animated.View>

      <Animated.ScrollView
        style={{ flex: 1, zIndex: 100 }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: yOffset,
                },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {!isBack && (
          <View style={styles.bigTitle}>
            <Text fontWeight="bold" style={{ fontSize: 25 }}>
              {title}
            </Text>

            {button && button}
          </View>
        )}

        <View style={{ flex: 1, padding: 20 }}>{children}</View>
      </Animated.ScrollView>
    </View>
  );
}
