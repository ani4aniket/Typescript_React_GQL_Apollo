import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import metrics from "../../utils/metrics";

export default StyleSheet.create({
  container: {
    ...shadow,
    width: metrics.WIDTH - 28,
    alignSelf: "center",
    padding: 5,
    marginBottom: 4,
    borderRadius: 9,
    elevation: 5,
    backgroundColor: "white"
  },
  tile: {
    flexDirection: "row"
  },
  productImage: {
    height: 80,
    width: 80,
    padding: 8
  },
  productDetail: {
    flex: 1,
    padding: 5
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  productInfo: {
    marginTop: 2,
    color: "#9b9b9b",
    fontWeight: "bold",
    fontSize: 14
  },
  productPriceDetail: {
    alignItems: "center",
    padding: 5,
    justifyContent: "space-between"
  },
  infoIcon: {
    fontSize: 24,
    color: "#9b9b9b"
  },
  productPrice: {
    fontSize: 24,
    fontWeight: "bold"
  }
});
