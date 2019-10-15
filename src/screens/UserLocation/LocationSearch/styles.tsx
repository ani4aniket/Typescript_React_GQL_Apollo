import { StyleSheet } from "react-native";
import COLORS from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    marginRight: 16,
    marginLeft: 16
  },
  searchBarContainer: {
    backgroundColor: COLORS.WHITE,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  searchBarInput: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderBottomWidth: 1
  }
});
