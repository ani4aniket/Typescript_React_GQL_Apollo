import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    flexDirection: "column",
    borderRadius: 9,
    backgroundColor: COLORS.WHITE
  },
  countryView: {
    flexDirection: "row",
    width: "100%",
    marginTop: 15,
    padding: 5,
    justifyContent: "space-between"
  },
  countryText: {
    fontSize: 16,
    color: "#484848"
  },
  countryValueText: {
    ...shadow,
    color: "#484848",
    fontSize: 16,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 5,
    paddingBottom: 5,
    elevation: 5,
    textAlign: "center",
    backgroundColor: "#eeeeee",
    borderRadius: 10
  },
  separationView: {
    height: 1,
    width: "100%",
    marginTop: 15,
    backgroundColor: "#cacaca"
  },
  totalText: {
    color: COLORS.WHITE,
    fontSize: 20
  },
  paymentText: {
    fontSize: 13,
    marginTop: 15,
    paddingLeft: 5,
    fontWeight: "bold",
    color: "#000000"
  }
});
