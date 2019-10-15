import { StyleSheet, TextStyle } from "react-native";
import METRICS from "../../../utils/metrics";
import { tile, heading, borderView } from "../../../theme/CommonStyles";

const text: TextStyle = {
  fontSize: 30,
  textAlign: "center",
  color: "#484848",
  fontWeight: "500"
};

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    width: METRICS.WIDTH - 25,
    flex: 1
  },
  headingText: {
    fontSize: 13,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "left",
    paddingVertical: 16
  },
  tile: {
    ...tile,
    ...text,
    padding: 10,
    flex: 0.8
  },
  currencyView: {
    ...borderView
  },
  currencyHeadingView: {
    flex: 1,
    paddingRight: 8,
    alignItems: "flex-end"
  },
  currencyHeadingText: {
    ...heading
  },
  percentageView: {
    flexDirection: "row"
  },
  descriptionText: {
    marginTop: 20,
    fontWeight: "normal"
  },
  flex: {
    flex: 1
  }
});
