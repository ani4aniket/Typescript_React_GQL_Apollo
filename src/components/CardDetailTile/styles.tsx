import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    ...shadow,
    margin: 10,
    padding: 10,
    flexDirection: "column",
    borderRadius: 9,
    elevation: 5,
    backgroundColor: "#ebebeb"
  },
  headingText: {
    fontSize: 10,
    marginTop: 10,
    color: "#484848"
  },
  inputText: {
    backgroundColor: "white",
    fontSize: 13,
    marginTop: 5,
    padding: 5,
    color: "#484848",
    borderRadius: 10
  },
  cardNoView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardNoText: {
    backgroundColor: "white",
    fontSize: 16,
    paddingLeft: 12,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    paddingRight: 12,
    color: "#484848",
    borderRadius: 10
  },
  cardExpiryView: {
    flexDirection: "row",
    alignItems: "center"
  },
  cardExpiryMonth: {
    backgroundColor: "white",
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
    alignItems: "center",
    color: "#484848",
    borderRadius: 10
  },
  cardExpiryYear: {
    backgroundColor: "white",
    fontSize: 16,
    marginTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 20,
    color: "#484848",
    borderRadius: 10
  },
  inputCvcText: {
    backgroundColor: "white",
    fontSize: 13,
    marginTop: 5,
    padding: 5,
    color: "#484848",
    borderRadius: 10,
    width: "50%"
  }
});
