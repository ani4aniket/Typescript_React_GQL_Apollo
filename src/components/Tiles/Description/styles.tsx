import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center"
  },
  icon: {
    color: "#555",
    fontSize: 20,
    padding: 15
  },
  body: {
    flex: 1,
    padding: 10,
    justifyContent: "center"
  },
  border: {
    borderBottomColor: "rgba(200, 200, 200, 0.8)",
    borderBottomWidth: 0.5
  },
  iconView: {
    alignItems: "center",
    width: 55
  }
});
