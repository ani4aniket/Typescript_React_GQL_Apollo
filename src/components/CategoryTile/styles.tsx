import { StyleSheet } from "react-native";
import { shadow, center } from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 4,
    paddingBottom: 0,
    ...center
  },
  iconView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    ...shadow,
    backgroundColor: "white"
  },
  text: {
    padding: 8,
    paddingBottom: 0,
    textAlign: "center",
    fontSize: 12,
    color: "#9b9b9b"
  }
});
