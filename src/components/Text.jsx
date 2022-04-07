import React from "react";
import { Text as TextBox } from "react-native";
import { theme } from "../utils";

export function Text({
  children,
  color = "#000",
  fontWeight = "normal",
  style,
  ...props
}) {
  return (
    <TextBox
      style={[
        {
          color: color,
          fontWeight: fontWeight,
          fontFamily:
            fontWeight === "bold"
              ? theme.fonts.bold
              : fontWeight === "500"
              ? theme.fonts.medium
              : theme.fonts.regular,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </TextBox>
  );
}
