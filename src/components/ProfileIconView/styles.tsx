import { StyleSheet } from "react-native";
import { shadow, center } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    ...center
  },
  imageView: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  imageText: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#484848"
  },
  imageContainer: {
    ...shadow,
    height: 62,
    width: 62,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    margin: 1,
    backgroundColor: COLORS.WHITE
  }
});
