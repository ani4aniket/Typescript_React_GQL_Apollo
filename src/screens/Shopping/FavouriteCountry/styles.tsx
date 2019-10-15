import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";
import { heading } from "../../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    width: METRICS.WIDTH - 25
  },
  heading: {
    ...heading,
    color: "#9b9b9b",
    marginTop: 16
  },
  text: {
    ...heading,
    flex: 1
  },
  headingView: {
    flexDirection: "row",
    alignItems: "center"
  },
  listHeading: {
    ...heading,
    marginVertical: 12
  }
});
