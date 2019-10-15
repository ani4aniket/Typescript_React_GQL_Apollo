import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { heading_large } from "../../../theme/CommonStyles";
import METRICS from "../../../utils/metrics";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
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
    color: colors.ORANGE,
    marginLeft: 15,
    fontWeight: "bold"
  },
  productDetailText: {
    ...heading_large
  },
  scroll: {
    marginBottom: 48
  }
});
