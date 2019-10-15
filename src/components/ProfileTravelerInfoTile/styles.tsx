import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    ...shadow,
    margin: 10,
    padding: 10,
    flexDirection: "column",
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
  buttonYellowBackground: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#ffb443"
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
  buttonText: {
    fontSize: 20,
    color: COLORS.WHITE
  },
  productInfo: {
    backgroundColor: "#efefef",
    borderRadius: 7,
    marginTop: 5,
    width: 150,
    fontSize: 15,
    paddingLeft: 5
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
    backgroundColor: "#eeeeee",
    padding: 5,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    textAlign: "center"
  },
  offerView: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
