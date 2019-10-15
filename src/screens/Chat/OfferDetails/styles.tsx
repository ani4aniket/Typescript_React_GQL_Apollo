import { StyleSheet } from "react-native";
import { shadow } from "../../../theme/CommonStyles";
import METRICS from "../../../utils/metrics";
import { COLORS } from "../../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    width: METRICS.WIDTH - 25,
    alignSelf: "center"
  },
  scrollContainer: {
    paddingBottom: 100,
    flex: 1
  },
  paymentMethodView: {
    marginTop: 15,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    borderRadius: 10,
    alignSelf: "center",
    padding: 15,
    justifyContent: "space-between"
  },
  selectPaymentText: {
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.BLACK
  },
  reviewText: {
    fontSize: 13,
    marginLeft: 15,
    fontWeight: "bold",
    color: COLORS.BLACK
  },
  addPaymentText: {
    ...shadow,
    elevation: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 12,
    borderRadius: 15,
    color: COLORS.WHITE,
    backgroundColor: "#67bc46"
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.WHITE
  },
  buttonGreyBackground: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#9b9b9b"
  },
  buttonGreenBackground: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#67bc46"
  },
  buttonMakeDepositView: {
    position: "absolute",
    marginTop: METRICS.HEIGHT - 150,
    width: "100%"
  }
});
