import { StyleSheet } from "react-native";
import { center, border, heading } from "../../../theme/CommonStyles";
import METRICS from "../../../utils/metrics";
import COLORS from "../../../theme/colors";

export default StyleSheet.create({
  searchBar: {
    backgroundColor: "#f5f5f5"
  },
  input: {
    fontSize: 10
  },
  subContainer: {
    width: METRICS.WIDTH - 25,
    alignItems: "center",
    alignSelf: "center"
  },
  searchView: {
    ...border,
    paddingBottom: 16,
    paddingHorizontal: 12,
    width: METRICS.WIDTH - 25,
    flexDirection: "row",
    ...center
  },
  addProductButton: {
    ...center,
    backgroundColor: COLORS.PARROT_GREEN,
    padding: 7,
    margin: 5,
    borderRadius: 15
  },
  addProductIcon: {
    color: COLORS.WHITE,
    fontSize: 15
  },
  heading: {
    ...heading,
    flex: 1,
    fontSize: 9
  },
  headerView: {
    ...center,
    flexDirection: "row",
    paddingVertical: 12
  },
  button: {
    paddingHorizontal: 8,
    margin: 0
  },
  scroll: {
    width: METRICS.WIDTH - 25,
    alignSelf: "center"
  },
  padding: { padding: 12, paddingBottom: 16 }
});
