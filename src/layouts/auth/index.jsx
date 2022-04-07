import { View, ImageBackground } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import React, { useEffect } from "react";
import styles from "./styles";
import { Button, Text } from "../../components";
import { useNavigation } from "@react-navigation/native";

export const AuthLayout = ({
  children,
  pageTitle,
  pageDesc,
  authType = "Login",
  changeHeight,
}) => {
  const flexValue = useSharedValue(0.5);
  const opacityValue = useSharedValue(1);

  const navigation = useNavigation();

  const animatedOpacityValue = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacityValue.value, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });

  const animatedFlexValue = useAnimatedStyle(() => {
    return {
      flex: withTiming(flexValue.value, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      }),
    };
  });

  useEffect(() => {
    if (changeHeight) {
      flexValue.value = 3;
      opacityValue.value = 0;
    } else {
      flexValue.value = 0.5;
      opacityValue.value = 1;
    }
  }, [changeHeight]);

  return (
    <ImageBackground
      source={require("../../../assets/images/auth.png")}
      style={styles.container}
    >
      <ImageBackground style={{ ...styles.bgContent, flex: 0.5 }}>
        <View style={{ position: "absolute", top: 30, zIndex: 10 }}>
          <Button
            onPress={() => navigation.goBack()}
            background="#000"
            icon={"arrow-back-outline"}
          >
            Back
          </Button>
        </View>

        <Animated.View style={[animatedOpacityValue]}>
          <Text color="#fff" fontWeight="bold" style={[{ fontSize: 40 }]}>
            {pageTitle}
          </Text>

          <Text
            color="#fff"
            fontWeight="500"
            style={{ lineHeight: 25, fontSize: 15, marginTop: 20 }}
          >
            {pageDesc}
          </Text>
        </Animated.View>
      </ImageBackground>

      <Animated.View
        style={[{ ...styles.contentContainer }, animatedFlexValue]}
      >
        <Text fontWeight="500" style={{ fontSize: 20 }}>
          {authType}
        </Text>

        <View style={{ marginTop: 20, flex: 1 }}>{children}</View>
      </Animated.View>
    </ImageBackground>
  );
};
