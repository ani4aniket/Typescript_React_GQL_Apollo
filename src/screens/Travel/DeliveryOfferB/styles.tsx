import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    width: METRICS.WIDTH - 25,
    alignSelf: "center"
  },
  scroll: {
    marginBottom: 48
  }
});
