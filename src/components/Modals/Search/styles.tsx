import { StyleSheet } from "react-native";
import { center, shadow } from "../../../theme/CommonStyles";
import { getStatusBarHeight } from "../../../utils";
import metrics from "../../../utils/metrics";
import colors from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    height: metrics.HEIGHT,
    width: metrics.WIDTH,
    flex: 1
  },
  header: {
    backgroundColor: colors.SEA_BLUE,
    height: getStatusBarHeight() + metrics.HEIGHT * 0.07,
    paddingTop: getStatusBarHeight(),
    flexDirection: "row",
    ...center,
    ...shadow
  },
  text: {
    fontSize: 15
  },
  icon: {
    color: "white",
    paddingHorizontal: 8,
    fontSize: 20
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "white"
  },
  textSubmit: {
    color: "white",
    paddingRight: 15,
    fontWeight: "500"
  },
  descriptionTextMd: {
    textAlignVertical: "center",
    fontSize: 15
  },
  headerRightButton: {
    padding: 5
  },
  tile: {
    justifyContent: "center"
  }
});
