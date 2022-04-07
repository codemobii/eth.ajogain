import { StyleSheet } from "react-native";
import { theme } from "../../utils";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    position: "relative",
    flexDirection: "row",
  },
  bigTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    left: 20,
  },
});

export default styles;
