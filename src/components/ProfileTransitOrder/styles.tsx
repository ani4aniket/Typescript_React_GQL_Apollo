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
    marginLeft: 50,
    height: 60,
    width: 60,
    borderRadius: 30
  },
  confirmationView: {
    marginLeft: 100
  },
  confirmationText: {
    fontSize: 10,
    color: "#484848"
  },
  confirmationTextInput: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#484848",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    padding: 5,
    borderRadius: 10
  }
});
