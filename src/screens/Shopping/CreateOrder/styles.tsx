import { StyleSheet } from "react-native";
import { shadow } from "../../../theme/CommonStyles";
import METRICS from "../../../utils/metrics";
import COLORS from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    width: METRICS.WIDTH - 25,
    flex: 1,
    alignSelf: "center"
  },
  noteTile: {
    backgroundColor: COLORS.PARROT_GREEN,
    borderRadius: 5
  },
  noteTileHeading: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 25,
    padding: 10
  },
  noteLine: {
    borderBottomColor: COLORS.WHITE,
    borderBottomWidth: 0.5
  },
  noteTileDescription: {
    padding: 10,
    paddingBottom: 50,
    color: COLORS.WHITE,
    fontWeight: "500",
    fontSize: 14
  },
  tile: {
    elevation: 1,
    ...shadow,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    marginTop: 10
  },
  tileHeading: {
    color: "#484848",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10
  },
  line: {
    borderBottomColor: "#484848",
    borderBottomWidth: 0.5
  },
  tileDescription: {
    color: "#9b9b9b",
    padding: 15,
    paddingBottom: 80,
    fontWeight: "500",
    fontSize: 14,
    flex: 1
  },
  tileButton: {
    flexDirection: "row"
  },
  icon: {
    alignSelf: "center",
    padding: 4,
    color: "#9b9b9b",
    fontWeight: "bold"
  }
});
