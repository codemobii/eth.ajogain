import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text } from "./Text";
import { theme } from "../utils";
import { Ionicons } from "@expo/vector-icons";

export const Input = ({
  label = "Email address",
  error = null,
  onChangeText,
  value,
  icon = "",
  secureTextEntry = false,
  onFocus,
  onBlur,
}) => {
  const [borderColor, setBorderColor] = useState("#ccc");
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  return (
    <View
      style={{
        position: "relative",
        width: "100%",
        marginBottom: 20,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {icon ? (
        <View
          style={{
            marginRight: 10,
          }}
        >
          <Ionicons name={icon} size={24} color="black" />
        </View>
      ) : null}
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder={label}
          style={{
            backgroundColor: "#fff",
            fontFamily: theme.fonts.medium,
            fontSize: 16,
            paddingVertical: 5,
            borderBottomWidth: borderColor !== "#ccc" ? 2 : 1,
            borderBottomColor: !error ? borderColor : theme.colors.error,
            color: "#000",
          }}
          placeholderTextColor="#ccc"
          secureTextEntry={showPassword}
          onFocus={() => {
            setBorderColor(theme.colors.primary);
            onFocus && onFocus();
          }}
          onBlur={() => {
            setBorderColor("#ccc");
            onBlur && onBlur();
          }}
        />

        {error ? (
          <Text
            color={theme.colors.error}
            fontWeight="500"
            style={{ marginTop: 5, fontSize: 12 }}
          >
            Email is required
          </Text>
        ) : null}
      </View>

      {secureTextEntry && (
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 0,
          }}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
