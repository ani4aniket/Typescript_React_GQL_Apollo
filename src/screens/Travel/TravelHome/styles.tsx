import { StyleSheet } from "react-native";
import { shadow, center, tile } from "../../../theme/CommonStyles";
import colors from "../../../theme/colors";
import METRICS from "../../../utils/metrics";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: METRICS.WIDTH - 25,
    alignSelf: "center",
    flex: 1
  },
  scroll: {
    width: "100%"
  },
  aboutLocationText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#484848"
  },
  destinationInput: {
    flex: 1
  },
  destinationInputView: {
    ...shadow,
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 10,
    alignSelf: "center",
    borderColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    fontSize: 20,
    paddingRight: 5
  },
  closeIcon: {
    fontSize: 20,
    color: "#aaa"
  },
  addTripView: {
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row"
  },
  addTripButton: {
    alignSelf: "flex-end",
    backgroundColor: colors.BUTTON.BG_PRIMARY,
    borderRadius: 12
  },
  addTripButtonText: {
    color: "white",
    fontSize: 9,
    fontWeight: "bold",
    padding: 6
  },
  basicTile: {
    margin: 1,
    elevation: 3,
    ...center,
    ...tile,
    backgroundColor: "white",
    paddingVertical: 40
  },
  basicTileText: {
    fontSize: 22,
    color: "#ececec"
  },
  userLocationView: {
    ...center,
    paddingVertical: 20,
    fontSize: 12
  },
  userLocationText: {
    fontSize: 12,
    fontWeight: "500"
  },
  icon: {
    fontSize: 60,
    color: "#ececec"
  },
  input: { fontSize: 13 }
});
