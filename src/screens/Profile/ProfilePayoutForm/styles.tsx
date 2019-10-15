import { StyleSheet } from "react-native";
import { shadow } from "../../../theme/CommonStyles";
import { COLORS } from "../../../theme";
import METRICS from "../../../utils/metrics";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    alignSelf: "center",
    width: METRICS.WIDTH - 25,
    flex: 1,
    paddingBottom: 10
  },
  payoutText: {
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  payoutInfoText: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 14,
    color: "#484848",
    textAlign: "left"
  },
  separationView: {
    height: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    backgroundColor: "#ececec"
  },
  noPayoutText: {
    marginTop: 40,
    marginBottom: 20,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#ececec"
  },
  addPayoutButton: {
    ...shadow,
    marginLeft: 5,
    marginTop: 20,
    elevation: 5,
    marginRight: 5,
    padding: 15,
    backgroundColor: "#15baf8",
    borderRadius: 10,
    alignItems: "center"
  },
  addPayoutText: {
    color: COLORS.WHITE,
    fontSize: 20
  },
  countryView: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "space-between"
  },
  countryText: {
    fontSize: 16,
    color: "#484848"
  },
  countryValueText: {
    color: "#484848",
    fontSize: 16
  },
  countryValueButton: {
    ...shadow,
    elevation: 5,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 5,
    borderRadius: 20,
    paddingBottom: 5,
    backgroundColor: "#eeeeee"
  },
  inputText: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#484848",
    backgroundColor: "#f5f5f5",
    borderRadius: 10
  },
  helpText: {
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    fontSize: 14,
    color: "#484848",
    textAlign: "center"
  },
  supportView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center"
  },
  supportText: {
    fontSize: 14,
    fontWeight: "bold"
  },
  saveView: {
    ...shadow,
    elevation: 5,
    marginTop: 30,
    width: 100,
    alignSelf: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#9b9b9b"
  },
  saveText: {
    fontSize: 15,
    color: "#484848"
  }
});
