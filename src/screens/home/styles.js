import { StyleSheet } from "react-native";
import { theme } from "../../utils";

const styles = StyleSheet.create({
  walletContainer: {
    backgroundColor: "#212337",
    // backgroundColor: "#000",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    paddingVertical: 30,
    overflow: "hidden",
  },

  cta_button: {
    height: 70,
    width: 70,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    overflow: "hidden",
  },
});

export default styles;
