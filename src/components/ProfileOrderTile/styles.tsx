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
    backgroundColor: COLORS.WHITE
  },
  productImage: {
    height: 80,
    width: 80
  },
  productDetail: {
    flexDirection: "column",
    width: "50%",
    padding: 5
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#484848"
  },
  productInfo: {
    marginTop: 5,
    color: "#9b9b9b",
    fontWeight: "bold",
    fontSize: 14
  }
});
