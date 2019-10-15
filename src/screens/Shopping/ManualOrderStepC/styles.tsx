import { StyleSheet, TextStyle } from "react-native";
import METRICS from "../../../utils/metrics";
import { tile, heading, borderView } from "../../../theme/CommonStyles";

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
    paddingTop: 10
  },
  tile: {
    ...tile,
    padding: 10,
    paddingHorizontal: 20
  },
  text: {
    ...text,
    fontSize: 20,
    alignSelf: "flex-start"
  },
  currencyView: {
    ...borderView,
    paddingVertical: 16
  },
  currencyHeadingText: {
    ...heading,
    paddingVertical: 10
  },
  shrinkedView: {
    justifyContent: "center",
    padding: 20,
    paddingTop: 0
  },
  input: {
    margin: 12,
    marginVertical: 24
  }
});
