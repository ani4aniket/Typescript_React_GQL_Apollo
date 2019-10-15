import { StyleSheet } from "react-native";
import { shadow } from "../../../theme/CommonStyles";
import METRICS from "../../../utils/metrics";
import { COLORS } from "../../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    alignSelf: "center",
    width: METRICS.WIDTH - 25,
    paddingBottom: 10,
    flex: 1
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
    elevation: 5,
    marginTop: 20,
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
  helpText: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    fontSize: 14,
    color: "#484848",
    textAlign: "center"
  },
  editText: {
    marginTop: 20,
    marginLeft: 25,
    marginRight: 25,
    fontSize: 14,
    fontWeight: "bold",
    color: "#f69e18",
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
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    marginTop: 20,
    paddingRight: 20
  },
  threeDotIcon: {
    fontSize: 22
  },
  inputText: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    color: "#484848",
    backgroundColor: "#f5f5f5",
    borderRadius: 10
  },
  amountText: {
    color: COLORS.WHITE,
    backgroundColor: "#484848",
    paddingLeft: 30,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    borderRadius: 10
  },
  paymentStatusText: {
    fontSize: 12,
    color: "#484848"
  },
  incomingPaymentText: {
    marginTop: 10,
    paddingTop: 2,
    fontWeight: "bold",
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 1,
    borderRadius: 10,
    color: COLORS.WHITE,
    backgroundColor: "#8ecc4e"
  },
  paymentView: {
    alignItems: "center",
    justifyContent: "center"
  }
});
