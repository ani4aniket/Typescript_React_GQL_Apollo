import { StyleSheet, Platform } from "react-native";
import { getStatusBarHeight } from "../../../utils";
import COLORS from "../../../theme/colors";

export default StyleSheet.create({
  header: {
    marginTop: Platform.OS === "android" ? 0 : getStatusBarHeight(),
    alignItems: "center",
    flexDirection: "row"
  },
  headerIcon: {
    color: "#484848",
    fontSize: 28
  },
  headingText: {
    padding: 15,
    color: COLORS.ORANGE,
    fontWeight: "bold",
    fontSize: 16,
    flex: 1
  }
});
