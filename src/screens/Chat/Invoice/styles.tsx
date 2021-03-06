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
  paymentText: {
    fontSize: 13,
    margin: 15,
    paddingLeft: 15,
    fontWeight: "bold",
    color: COLORS.BLACK
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
  cardInfoView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardToggleView: {
    flexDirection: "row",
    alignItems: "center"
  },
  futureText: {
    fontSize: 10,
    color: "#484848"
  }
});
