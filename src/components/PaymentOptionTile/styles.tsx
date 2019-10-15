import { StyleSheet } from "react-native";
import { shadow, center } from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    ...shadow,
    margin: 10,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 9,
    elevation: 5,
    backgroundColor: "white"
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
  totalView: {
    marginTop: 15,
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    width: "95%",
    padding: 10,
    backgroundColor: "#484848",
    justifyContent: "space-between"
  },
  totalText: {
    color: "white",
    fontSize: 20
  }
});
