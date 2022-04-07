import { useFonts } from "expo-font";

export const fontLoader = () => {
  let [fontsLoaded] = useFonts({
    "Gilroy-Bold": require("../../assets/fonts/Gilroy-Medium.otf"),
    "Gilroy-Medium": require("../../assets/fonts/Gilroy-Regular.ttf"),
    "Gilroy-Regular": require("../../assets/fonts/Gilroy-Light.ttf"),
  });

  if (!fontsLoaded) {
    return false;
  } else {
    return true;
  }
};
