import { TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "./Text";
import { theme } from "../utils";

export function Link({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text fontWeight="bold" color={theme.colors.primary}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
