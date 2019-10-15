import { StyleSheet, ViewStyle } from "react-native";
import { shadow, center } from "../../../theme/CommonStyles";
import colors from "../../../theme/colors";
import METRICS from "../../../utils/metrics";

const button: ViewStyle = {
  ...center,
  paddingHorizontal: 20,
  padding: 10,
  backgroundColor: colors.BUTTON.BG_PRIMARY,
  borderRadius: 8
};

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center"
  },
  subContainer: {
    width: "90%",
    alignItems: "center",
    height: METRICS.HEIGHT
  },
  body: {
    elevation: 1,
    ...shadow,
    backgroundColor: "white",
    alignItems: "center"
  },
  bodyHeader: {
    flexDirection: "row"
  },
  bodyHeaderButton: {
    ...center,
    flex: 1,
    backgroundColor: colors.BUTTON.BG_PRIMARY,
    padding: 10
  },
  bodyHeaderButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  },
  destinationInput: {
    backgroundColor: "#eeeeee",
    padding: 10,
    borderRadius: 5,
    width: METRICS.WIDTH * 0.8
  },
  subBodyViewText: {
    padding: 10
  },
  bottomView: {
    ...center,
    marginBottom: 30,
    flexDirection: "row"
  },
  addTripButton: {
    ...button,
    backgroundColor: "#9b9b9b"
  },
  addTripButtonEnabled: {
    ...button
  },
  addTripButtonText: {
    color: "#484848",
    fontWeight: "bold"
  },
  addTripButtonTextEnabled: {
    color: "white",
    fontWeight: "bold"
  },
  roundTripText: {
    fontSize: 10,
    textAlign: "center",
    marginLeft: 25,
    padding: 5
  },
  switchView: {
    ...center,
    marginLeft: 30
  },
  destinationInputView: {
    backgroundColor: "#eeeeee",
    borderRadius: 5,
    width: METRICS.WIDTH * 0.8
  },
  flexStart: { alignItems: "flex-start" }
});
