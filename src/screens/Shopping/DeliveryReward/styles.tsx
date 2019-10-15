import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";
import { borderView, heading } from "../../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    width: METRICS.WIDTH - 25,
    flex: 1,
    alignSelf: "center"
  },
  specifications: {
    ...borderView,
    paddingTop: 16
  },
  heading: { fontSize: 10, fontWeight: "bold", paddingBottom: 16 },
  subHeading: {
    ...heading,
    fontSize: 12
  },
  headingValue: {
    ...heading,
    fontWeight: "normal",
    fontSize: 12
  },
  button: { flex: 0 }
});
