import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text } from "./";

export function Button({
  children,
  color = "#fff",
  background = "#FA5805",
  onPress,
  style,
  icon = null,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 18,
        borderRadius: 15,
        backgroundColor: background,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        ...style,
      }}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={24}
          style={{ marginRight: 5 }}
          color={color}
        />
      )}
      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
        }}
        color={color}
        fontWeight="bold"
      >
        {children}
      </Text>
    </Pressable>
  );
}
