import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  destinationInput: {
    flex: 1
  },
  destinationInputView: {
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    padding: Platform.OS === "android" ? 0 : 10,
    alignSelf: "center",
    borderColor: "#eee",
    flexDirection: "row"
  },
  searchIcon: {
    fontSize: 20,
    paddingRight: 5
  },
  closeIcon: {
    fontSize: 20,
    color: "#aaa"
  }
});
