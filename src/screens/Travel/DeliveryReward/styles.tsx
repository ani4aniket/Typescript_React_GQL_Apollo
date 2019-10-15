import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";
import { COLORS } from "../../../theme";
import { shadow, heading_large } from "../../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    width: METRICS.WIDTH - 25,
    alignSelf: "center"
  },
  scroll: {
    marginBottom: 48
  },
  messageBody: {
    ...shadow,
    backgroundColor: COLORS.SKY_BLUE,
    marginVertical: 20,
    marginHorizontal: 2,
    borderRadius: 10
  },
  text: {
    ...heading_large,
    paddingTop: 4,
    paddingHorizontal: 12
  },
  description: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    fontSize: 15,
    color: "#9b9b9b"
  },
  policyText: {
    textAlign: "center",
    marginBottom: 20
  },
  underline: {
    textDecorationLine: "underline"
  }
});
