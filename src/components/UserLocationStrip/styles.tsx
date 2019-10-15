import { StyleSheet } from "react-native";
import COLORS from "../../theme/colors";

export default StyleSheet.create({
  location: {
    padding: 10,
    paddingLeft: 0,
    flexDirection: "row",
    alignSelf: "flex-start"
  },
  aboutLocationText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#484848"
  },
  locationText: {
    fontSize: 11,
    color: COLORS.ORANGE,
    paddingHorizontal: 5
  }
});
