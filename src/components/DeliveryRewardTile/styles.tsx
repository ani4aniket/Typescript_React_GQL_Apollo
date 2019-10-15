import { StyleSheet } from "react-native";
import { tile, heading, borderView, text } from "../../theme/CommonStyles";

export default StyleSheet.create({
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
  totalText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  flex: {
    flex: 1
  },
  rowFlex: {
    flexDirection: "row"
  }
});
