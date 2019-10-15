import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";
import { borderView, heading, tile } from "../../../theme/CommonStyles";
import { COLORS } from "../../../theme";

export default StyleSheet.create({
  container: {
    width: METRICS.WIDTH - 25,
    flex: 1,
    alignSelf: "center"
  },
  specifications: {
    ...borderView,
    paddingTop: 16
  },
  heading: { fontSize: 10, fontWeight: "bold", paddingBottom: 16 },
  subHeading: {
    ...heading,
    fontSize: 12
  },
  headingValue: {
    ...heading,
    fontWeight: "normal",
    fontSize: 12
  },
  button: { flex: 0 },
  tile: {
    ...tile,
    alignItems: "flex-start",
    margin: 20,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: COLORS.WHITE
  },
  commentHeading: {
    padding: 10,
    ...heading
  },
  comment: {
    padding: 10,
    paddingBottom: 30,
    color: "#9b9b9b"
  }
});
