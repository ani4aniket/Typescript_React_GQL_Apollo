import { StyleSheet, TextStyle } from "react-native";
import { tile, center, heading, borderView } from "../../../theme/CommonStyles";
import METRICS from "../../../utils/metrics";
import { COLORS } from "../../../theme";

const text: TextStyle = {
  fontSize: 30,
  textAlign: "center",
  color: "#484848",
  fontWeight: "500"
};

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    width: METRICS.WIDTH - 25,
    alignSelf: "center"
  },
  productDetailText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  productDetailView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  currencyView: {
    ...borderView
  },
  buttonText: {
    fontSize: 20,
    color: COLORS.WHITE
  },
  text: {
    ...text,
    fontSize: 20
  },
  tile: {
    ...tile,
    ...text,
    padding: 10,
    flex: 0.8
  },
  currencyHeadingView: {
    flex: 1,
    paddingRight: 8,
    alignItems: "flex-end"
  },
  currencyHeadingText: {
    ...heading
  },
  slider: {
    height: 30,
    width: "100%",
    alignSelf: "center"
  },
  percentageText: {
    ...text,
    marginTop: 20,
    fontSize: 16,
    flex: 1,
    textAlign: "center",
    fontWeight: "bold"
  },
  percentageView: {
    flexDirection: "row"
  },
  bottomView: {
    flexDirection: "row",
    ...center
  },
  bottomRightView: {
    flex: 1
  },
  button: {
    flex: 0
  },
  quantity: {
    padding: 15,
    fontSize: 24,
    color: "#484848"
  },
  buttonIcon: {
    fontWeight: "bold",
    fontSize: 28,
    color: "#9b9b9b"
  },
  totalView: {
    backgroundColor: "#484848",
    ...center,
    padding: 10,
    borderRadius: 8
  },
  totalText: {
    color: COLORS.WHITE,
    fontSize: 24,
    fontWeight: "bold"
  },
  descriptionText: {
    marginTop: 20,
    fontWeight: "normal"
  },
  flex: {
    flex: 1
  },
  rowFlex: {
    flexDirection: "row"
  },
  marginBot: {
    marginBottom: 10
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
  }
});
