import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    ...shadow,
    margin: 10,
    padding: 5,
    flexDirection: "row",
    borderRadius: 9,
    elevation: 5,
    backgroundColor: COLORS.WHITE,
    alignItems: "center"
  },
  productImage: {
    height: 70,
    width: 70
  },
  productDetail: {
    flexDirection: "column",
    marginLeft: 10,
    padding: 5
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#484848"
  },
  productInfo: {
    backgroundColor: "#efefef",
    borderRadius: 7,
    fontSize: 14,
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  arrowIcon: {
    fontSize: 22,
    marginLeft: 10
  },
  infoIcon: {
    fontSize: 22
  },
  depositView: {
    flexDirection: "column",
    marginLeft: 10,
    padding: 5
  },
  depositText: {
    color: "#484848",
    fontSize: 10
  },
  depositAmountText: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 10,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: "#484848"
  }
});
