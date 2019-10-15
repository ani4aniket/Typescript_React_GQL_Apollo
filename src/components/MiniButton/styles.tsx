import { StyleSheet } from "react-native";
import { shadow, center } from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    ...center,
    ...shadow,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 4,
    paddingHorizontal: 16,
    margin: 10,
    borderWidth: 0.5,
    borderColor: "transparent"
  },
  text: {
    fontSize: 10
  }
});
