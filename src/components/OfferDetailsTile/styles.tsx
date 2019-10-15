import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    ...shadow,
    margin: 10,
    padding: 10,
    alignItems: "center",
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
    color: "#484848",
    fontWeight: "bold"
  },
  productInfo: {
    backgroundColor: "#efefef",
    borderRadius: 7,
    color: "#484848",
    marginTop: 5,
    width: 150,
    fontSize: 15,
    paddingLeft: 5
  },
  rewardView: {
    flexDirection: "row",
    marginTop: 10
  },
  rowView: {
    flexDirection: "row",
    marginTop: 5,
    padding: 5,
    width: "95%",
    justifyContent: "space-between"
  },
  titleText: {
    fontSize: 16,
    color: "#9b9b9b"
  },
  inputView: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    textAlign: "center"
  },
  offerView: {
    flexDirection: "row",
    justifyContent: "center"
  },
  totalView: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    width: "95%",
    padding: 10,
    backgroundColor: "#484848",
    justifyContent: "space-between"
  },
  totalText: {
    color: COLORS.WHITE,
    fontSize: 20
  },
  confirmText: {
    marginTop: 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    color: "#484848"
  }
});
