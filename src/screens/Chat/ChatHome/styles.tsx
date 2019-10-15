import { StyleSheet, Platform } from "react-native";
import METRICS from "../../../utils/metrics";
import COLORS from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1
  },
  scroll: {
    width: METRICS.WIDTH - 25,
    alignSelf: "center"
  },
  search: {
    backgroundColor: "#f5f5f5",
    margin: Platform.OS === "ios" ? 12 : 16
  }
});
