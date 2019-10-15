import { StyleSheet } from "react-native";
import { center, shadow } from "../../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    ...center,
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%"
  },
  modalView: {
    ...shadow,
    height: 335,
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
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 10
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end"
  }
});
