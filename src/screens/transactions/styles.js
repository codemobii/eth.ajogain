import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  grayText: {
    color: "#8E8E93",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descImageContainer: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 10,
  },
  descImage: {
    height: 35,
    width: 35,
    resizeMode: "contain",
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default styles;
