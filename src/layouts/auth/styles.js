import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    position: "relative",
  },

  bgContent: {
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  contentContainer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default styles;
