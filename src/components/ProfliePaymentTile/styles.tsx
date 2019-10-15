import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    ...shadow,
    margin: 10,
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 9,
    elevation: 5,
    backgroundColor: COLORS.WHITE
  },
  cardNoView: {
    fontSize: 24,
    color: "#484848",
    marginTop: 10
  },
  rowView: {
    marginTop: 40,
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    alignItems: "center"
  },
  expiryText: {
    fontSize: 20,
    color: "#484848"
  },
  expiryTextValue: {
    fontSize: 20,
    color: "#484848",
    marginLeft: 10
  },
  cardImage: {
    height: 40,
    width: 60,
    marginLeft: 10
  },
  cardNoText: {
    backgroundColor: COLORS.WHITE,
    fontSize: 16,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
    marginTop: 5,
    paddingRight: 5,
    color: "#484848",
    borderRadius: 10
  },
  cardCvcText: {
    fontSize: 20,
    color: "#484848",
    marginLeft: 10
  },
  threeDotIcon: {
    fontSize: 22
  },
  threeDotView: {
    alignSelf: "flex-end"
  },
  expiryRowView: {
    flexDirection: "row",
    marginLeft: 50
  }
});
