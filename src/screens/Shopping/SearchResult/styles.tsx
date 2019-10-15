import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";
import { heading, border } from "../../../theme/CommonStyles";
import { COLORS } from "../../../theme";

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    width: METRICS.WIDTH - 25,
    flex: 1
  },
  text: {
    ...heading,
    color: COLORS.BLACK,
    padding: 12
  },
  description: {
    ...heading,
    paddingLeft: 12,
    fontWeight: "normal",
    fontStyle: "italic"
  },
  specifications: {
    ...border,
    paddingBottom: 16
  }
});
