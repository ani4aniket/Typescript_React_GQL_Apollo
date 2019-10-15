import { StyleSheet } from "react-native";
import { shadow, center, border } from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    ...center,
    margin: 8
  },
  flagView: {
    ...shadow,
    shadowColor: "#555"
  },
  image: {
    borderRadius: 10
  },
  text: {
    paddingVertical: 4,
    color: "#9b9b9b",
    fontSize: 12
  },
  countryList: {
    ...border,
    paddingVertical: 12,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
