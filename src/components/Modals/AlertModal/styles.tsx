import { StyleSheet, TextStyle } from "react-native";
import { center, shadow } from "../../../theme/CommonStyles";
import colors from "../../../theme/colors";

const text: TextStyle = {
  textAlign: "center",
  padding: 24,
  paddingVertical: 10,
  fontSize: 20,
  color: "#484848",
  fontWeight: "400"
};

export default StyleSheet.create({
  container: {
    ...center,
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%"
  },
  modalView: {
    ...shadow,
    height: 279,
    width: 344,
    backgroundColor: "white",
    borderRadius: 10
  },
  search: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: "#f5f5f5"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600"
  },
  button: {
    ...center,
    shadowRadius: 2,
    shadowOffset: { height: 2.5, width: 0 },
    shadowColor: "rgba(0,0,0,0.5)",
    backgroundColor: colors.PARROT_GREEN,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 10
  },
  bottom: {
    justifyContent: "flex-end"
  },
  body: {
    ...center,
    alignSelf: "center",
    flex: 1
  },
  heading: {
    ...text
  },
  subHeading: {
    ...text,
    fontWeight: "500",
    color: colors.PARROT_GREEN
  },
  description: {
    ...text,
    fontSize: 15
  }
});
