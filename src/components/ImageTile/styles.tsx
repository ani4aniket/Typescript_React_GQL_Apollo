import { StyleSheet } from "react-native";
import { shadow, center } from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    margin: 10
  },
  button: {
    ...shadow,
    ...center,
    width: 84,
    height: 84,
    borderRadius: 5
  },
  text: {
    width: 75,
    height: 28,
    fontSize: 10.5,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: "center",
    color: "#9b9b9b"
  },
  optionalText: {
    fontSize: 9,
    fontWeight: "100",
    fontStyle: "italic",
    padding: 5,
    lineHeight: 11,
    letterSpacing: 0,
    textAlign: "left",
    color: "#9b9b9b",
    alignSelf: "center"
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5
  }
});
