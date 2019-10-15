import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    ...shadow,
    margin: 12.5,
    borderRadius: 10,
    backgroundColor: "white"
  },
  imageView: {
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  heading: {
    padding: 2,
    fontSize: 12,
    fontWeight: "bold"
  },
  bottomView: {
    flexDirection: "row",
    padding: 2
  },
  city: {
    color: "#9b9b9b",
    fontWeight: "bold",
    fontSize: 12,
    paddingLeft: 2
  },
  country: {
    padding: 2,
    fontSize: 11,
    fontWeight: "bold",
    color: "#15baf8"
  },
  priceView: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 8
  },
  price: {
    fontWeight: "bold",
    color: "#484848",
    fontSize: 24
  },
  image: {
    width: 160,
    height: 130
  }
});
