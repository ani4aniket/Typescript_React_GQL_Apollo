import { StyleSheet } from "react-native";
import { tile, border } from "../../theme/CommonStyles";
import COLORS from "../../theme/colors";
import METRICS from "../../utils/metrics";
import { getStatusBarHeight } from "../../utils";

const text = {
  fontSize: 16,
  color: "#9b9b9b"
};

export default StyleSheet.create({
  container: {
    ...tile,
    backgroundColor: COLORS.WHITE,
    flexDirection: "row",
    height: METRICS.HEIGHT - getStatusBarHeight() - 220,
    paddingBottom: 80,
    alignItems: "flex-start"
  },
  tile: {
    ...border,
    padding: 16,
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    ...text
  },
  icon: {
    fontSize: 28,
    color: COLORS.PARROT_GREEN,
    fontWeight: "bold",
    flex: 1,
    textAlign: "right",
    marginVertical: -16,
    paddingRight: 100
  },
  dictionarytext: {
    ...text,
    fontSize: 10,
    fontWeight: "bold"
  },
  dictionaryView: {
    padding: 4,
    paddingVertical: 1
  },
  dictionaryScroll: {
    paddingTop: 28
  }
});
