import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";

export default StyleSheet.create({
  container: {
    width: METRICS.WIDTH - 25,
    flex: 1,
    alignSelf: "center"
  },
  scroll: {},
  button: { flex: 0 }
});
