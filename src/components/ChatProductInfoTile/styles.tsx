import { StyleSheet } from "react-native";
import { shadow, center } from "../../theme/CommonStyles";
import metrics from "../../utils/metrics";

export default StyleSheet.create({
  container: {
    ...shadow,
    ...center,
    width: metrics.WIDTH - 25,
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    flexDirection: "row",
    borderRadius: 9,
    elevation: 5,
    backgroundColor: "white"
  },
  productImage: {
    height: 70,
    width: 70
  },
  productDetail: {
    flex: 1,
    padding: 5
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#484848"
  },
  productInfo: {
    backgroundColor: "#efefef",
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 12,
    padding: 2,
    marginTop: 6,
    width: 150,
    paddingLeft: 4,
    color: "#484848"
  },
  arrowIcon: {
    fontSize: 28
  },
  infoIcon: {
    fontSize: 25
  }
});
