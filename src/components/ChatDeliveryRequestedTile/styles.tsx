import { StyleSheet } from "react-native";
import { shadow, center } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";
import metrics from "../../utils/metrics";

export default StyleSheet.create({
  container: {
    ...shadow,
    ...center,
    width: metrics.WIDTH - 28,
    margin: 8,
    alignSelf: "center",
    padding: 10,
    borderRadius: 9,
    elevation: 5,
    backgroundColor: COLORS.WHITE
  },
  profileView: {
    flexDirection: "row"
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  productDetail: {
    flexDirection: "column",
    marginLeft: 10,
    padding: 5
  },
  productName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#484848"
  },
  productInfo: {
    backgroundColor: "#efefef",
    overflow: "hidden",
    color: "#484848",
    borderRadius: 10,
    marginTop: 5,
    fontSize: 15,
    paddingHorizontal: 8
  },
  rewardView: {
    flexDirection: "row",
    marginTop: 10
  },
  columnView: {
    flexDirection: "column",
    padding: 10,
    flex: 1
  },
  titleText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#484848"
  },
  inputView: {
    ...center,
    backgroundColor: "#eee",
    padding: 5,
    marginVertical: 4,
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: "center"
  },
  inputText: {
    fontSize: 16,
    color: "#484848",
    fontWeight: "500"
  },
  offerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingBottom: 20
  }
});
