import { StyleSheet } from "react-native";
import { shadow } from "../../../theme/CommonStyles";
import METRICS from "../../../utils/metrics";

export default StyleSheet.create({
  container: {
    height: METRICS.HEIGHT,
    width: METRICS.WIDTH
  },
  modal: {
    ...shadow,
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#eee",
    borderRadius: 6
  },
  modalText: {
    textAlign: "right",
    paddingRight: 10,
    padding: 5,
    fontSize: 18,
    color: "#007be8"
  }
});
