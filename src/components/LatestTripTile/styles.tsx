import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    ...shadow,
    marginTop: 10,
    borderRadius: 9,
    elevation: 5,
    backgroundColor: COLORS.WHITE,
    width: "99%",
    alignSelf: "center"
  },
  headerView: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  threeDotIcon: {
    fontSize: 22
  },
  contentView: {
    marginLeft: 15,
    marginRight: 20,
    flexDirection: "row"
  },
  footerView: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between"
  },
  columnView: {
    flex: 0.25
  },
  headerText: {
    borderRadius: 10,
    color: "#484848",
    alignSelf: "flex-start"
  },
  footer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  footerText: {
    fontSize: 12,
    color: "#484848"
  },
  separationView: {
    height: 1,
    width: "100%",
    marginTop: 10,
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
  locationTimeText: {
    marginTop: 5,
    fontSize: 9,
    color: "#7b7b7b"
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
    height: 40,
    flex: 0.5
  },
  dot: {
    height: 10,
    width: 10
  },
  line: {
    height: 1,
    width: "65%"
  },
  plane: {
    height: 30,
    width: 30,
    marginRight: 5
  }
});
