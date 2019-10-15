import { StyleSheet } from "react-native";
import { shadow, center, border } from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    ...center,
    margin: 6
  },
  flagView: {
    ...shadow,
    shadowColor: "#555"
  },
  image: {
    borderRadius: 10
  },
  text: {
    paddingVertical: 8,
    color: "#9b9b9b",
    fontSize: 12
  },
  flatList: {
    ...border
  }
});
