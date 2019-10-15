import { StyleSheet } from "react-native";
import { shadow, center } from "../../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%"
  },
  modalView: {
    ...shadow,
    backgroundColor: "white",
    borderRadius: 10,
    width: 357,
    paddingBottom: 24
  },
  button: {
    ...center,
    margin: 18,
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: 0,
    borderWidth: 1
  },
  text: {
    fontSize: 20
  }
});
