import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    ...shadow,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    borderRadius: 9,
    elevation: 5,
    backgroundColor: COLORS.WHITE,
    alignItems: "center"
  },
  productImage: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  userImage: {
    position: "absolute",
    marginLeft: 40,
    height: 60,
    width: 60,
    borderRadius: 30
  },
  confirmationView: {
    marginLeft: 50,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    padding: 5,
    borderRadius: 10
  },
  confirmationText: {
    fontSize: 25,
    color: "#484848",
    fontWeight: "bold"
  },
  confirmationTextInput: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#484848",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    padding: 5,
    borderRadius: 10
  },
  rowView: {
    flexDirection: "row",
    width: 100
  },
  locationView: {
    fontSize: 10,
    width: "100%",
    textAlign: "center",
    color: "#484848",
    marginTop: 5
  },
  deliveryDateText: {
    fontSize: 10,
    color: "#9b9b9b"
  },
  columnView: {
    alignItems: "center"
  }
});
