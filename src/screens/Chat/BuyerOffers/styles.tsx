import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";
import { COLORS } from "../../../theme";
import { heading_large } from "../../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    width: METRICS.WIDTH - 25,
    alignSelf: "center"
  },
  header: {
    flexDirection: "row",
    padding: 10
  },
  arrowIcon: {
    marginLeft: 5,
    fontSize: 28
  },
  headerText: {
    fontSize: 18,
    color: COLORS.ORANGE,
    marginLeft: 15,
    fontWeight: "bold"
  },
  productDetailText: {
    ...heading_large
  }
});
