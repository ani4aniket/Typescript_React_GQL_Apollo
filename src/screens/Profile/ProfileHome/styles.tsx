import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";
import { COLORS } from "../../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    alignSelf: "center",
    width: METRICS.WIDTH - 25,
    flex: 1
  },
  headerView: {
    marginTop: 40,
    marginLeft: 20,
    alignItems: "center",
    flexDirection: "row"
  },
  locationText: {
    color: "#484848",
    fontSize: 12,
    fontWeight: "bold"
  },
  locationValueText: {
    color: "#f69e18",
    fontSize: 12,
    marginLeft: 20
  },
  separationView: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#cacaca",
    height: 1,
    marginTop: 20
  },
  subHeadingText: {
    fontSize: 13,
    marginLeft: 20,
    color: "#000000",
    fontWeight: "bold",
    marginTop: 10
  },
  profileIconView: {
    padding: 10,
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
