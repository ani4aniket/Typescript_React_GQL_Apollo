import { StyleSheet, TextStyle } from "react-native";
import METRICS from "../../../utils/metrics";
import { tile, center, heading, borderView } from "../../../theme/CommonStyles";
import COLORS from "../../../theme/colors";

const text: TextStyle = {
  fontSize: 24,
  textAlign: "center",
  color: "#484848"
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
    padding: 10,
    paddingHorizontal: 20
  },
  text: {
    ...text,
    fontSize: 20
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
  slider: {
    height: 30,
    width: "100%",
    alignSelf: "center"
  },
  percentageText: {
    ...text,
    marginTop: 20,
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    fontWeight: "bold"
  },
  percentageView: {
    flexDirection: "row"
  },
  bottomRightView: {
    flex: 1
  },
  totalView: {
    backgroundColor: "#484848",
    ...center,
    padding: 10,
    borderRadius: 8
  },
  totalText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  descriptionText: {
    marginTop: 20,
    fontWeight: "normal"
  },
  bottomHeading: {
    ...heading,
    marginBottom: 16
  },
  bottomDescription: {
    color: COLORS.ORANGE,
    fontSize: 12,
    fontWeight: "bold"
  },
  flex: {
    flex: 1
  },
  paddedFlex: {
    flex: 1,
    padding: 8
  },
  marginBot: {
    marginBottom: 12
  }
});
