import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";
import { COLORS } from "../../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    alignSelf: "center",
    width: METRICS.WIDTH - 25,
    flex: 1
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  orderListingView: {
    marginTop: 10
  }
});
