import { StyleSheet } from "react-native";
import {
  tile,
  center,
  heading,
  borderView,
  text
} from "../../../theme/CommonStyles";

export default StyleSheet.create({
  tile: {
    ...tile,
    ...text,
    padding: 10,
    flex: 0.8
  },
  currencyView: {
    ...borderView
  },
  currencyHeadingView: {
    flex: 1,
    paddingRight: 8,
    alignItems: "flex-end"
  },
  currencyHeadingText: {
    ...heading
  },
  percentageView: {
    flexDirection: "row",
    padding: 3
  },
  bottomView: {
    flexDirection: "row",
    ...center
  },
  bottomRightView: {
    flex: 1
  },
  button: {
    flex: 0,
    width: 38
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
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  descriptionText: {
    marginTop: 20,
    fontWeight: "normal"
  },
  marginBot: {
    marginBottom: 10
  },
  hideQuantity: {
    width: "50%",
    alignSelf: "center"
  }
});
