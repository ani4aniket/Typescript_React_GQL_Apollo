import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    ...shadow,
    marginTop: 10,
    borderRadius: 9,
    elevation: 5,
    backgroundColor: COLORS.WHITE
  },
  headerView: {
    padding: 5,
    marginLeft: 5
  },
  contentView: {
    margin: 5,
    padding: 5,
    flexDirection: "row"
  },
  footerView: {
    padding: 5,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerText: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    color: "#484848",
    paddingLeft: 5,
    paddingRight: 5,
    alignSelf: "flex-start"
  },
  footerText: {
    fontSize: 12,
    color: "#484848"
  },
  separationView: {
    height: 1,
    width: "100%",
    backgroundColor: "#f5f5f5"
  },
  locationCodeText: {
    fontWeight: "bold",
    fontSize: 27,
    color: "#484848"
  },
  locationNameText: {
    marginTop: 5,
    fontSize: 10,
    color: "#484848"
  },
  amountView: {
    alignItems: "center",
    marginLeft: 20
  },
  amountEarnedText: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#484848"
  },
  amountText: {
    backgroundColor: "#484848",
    fontSize: 15,
    paddingTop: 10,
    color: COLORS.WHITE,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10
  },
  planeView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  dot: {
    height: 10,
    width: 10
  },
  line: {
    height: 1,
    width: 40
  },
  plane: {
    height: 30,
    width: 30
  }
});
