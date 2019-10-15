import { StyleSheet, TextStyle } from "react-native";
import { shadow, center } from "../../theme/CommonStyles";
import colors from "../../theme/colors";

const text: TextStyle = {
  fontSize: 10,
  paddingHorizontal: 2
};

const dueDateText: TextStyle = {
  fontSize: 8,
  color: "#9b9b9b",
  fontWeight: "bold",
  paddingVertical: 2
};

export default StyleSheet.create({
  container: {
    ...shadow,
    ...center,
    margin: 1,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    marginBottom: 14
  },
  header: {
    flexDirection: "row",
    padding: 10
  },
  headerTextLeft: {
    flex: 1,
    color: "#484848",
    fontWeight: "bold",
    fontSize: 13
  },
  offerStatusText: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 11
  },
  offerTimeText: {
    color: "gray",
    fontSize: 10,
    fontStyle: "italic",
    paddingVertical: 5
  },
  button: {
    ...center,
    width: "100%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10
  },
  buttonText: {
    color: colors.WHITE,
    fontWeight: "600",
    fontSize: 18
  },
  image: {
    width: 90,
    height: 90
  },
  imageView: {
    alignItems: "center",
    flex: 1
  },
  bottomView: {
    flexDirection: "row"
  },
  verticalView: {
    flexDirection: "row",
    paddingVertical: 3
  },
  boxView: {
    flex: 2
  },
  deliverInText: {
    ...text
  },
  deliverInTextBlue: {
    ...text,
    color: "#15baf8",
    fontWeight: "400"
  },
  box: {
    backgroundColor: "#eaeaea",
    marginRight: 8,
    borderRadius: 8,
    padding: 4,
    flex: 1,
    flexDirection: "row",
    ...center
  },
  bottom: {
    padding: 15,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  delivaryAward: {
    fontStyle: "italic"
  },
  currency: {
    fontSize: 22,
    fontWeight: "500",
    fontStyle: "italic"
  },
  boxLeftView: { flex: 1.2, ...center, paddingHorizontal: 2 },
  boxRightView: { flex: 1 },
  transportText: { fontSize: 10, paddingVertical: 4, alignSelf: "flex-start" },
  buttonView: {
    backgroundColor: colors.WHITE,
    ...center,
    borderRadius: 8,
    paddingHorizontal: 4,
    marginVertical: 4
  },
  buttonViewText: {
    fontSize: 10,
    color: "#484848"
  },
  dueDateText: {
    ...dueDateText
  },
  dueDateText_B: {
    ...dueDateText,
    color: "#484848"
  },
  buyingLocationText: { color: colors.ORANGE, fontWeight: "bold" },
  deliveryLocationText: { color: "#15baf8", fontWeight: "bold" },
  codeHeading: {
    color: "#484848",
    fontSize: 10,
    textAlign: "center",
    paddingTop: 4
  },
  code: {
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 8,
    fontSize: 26,
    fontWeight: "bold",
    color: "#484848",
    padding: 6,
    margin: 8,
    overflow: "hidden"
  }
});
