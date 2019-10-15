import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { center } from "../../../theme/CommonStyles";
import colors from "../../../theme/colors";

const text: TextStyle = { color: "#484848", fontSize: 20 };

const button: ViewStyle = {
  ...center,
  width: "90%",
  padding: 8,
  marginTop: 10,
  borderRadius: 10
};

export default StyleSheet.create({
  container: {
    ...center,
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "100%"
  },
  modalView: {
    ...center,
    backgroundColor: "white",
    height: 288,
    width: 344,
    borderRadius: 8
  },
  itemView: {
    flexDirection: "row",
    width: "100%",
    padding: 16,
    alignItems: "center"
  },
  itemName: {
    ...text,
    padding: 16
  },
  notifyText: {
    ...text,
    marginVertical: 10,
    textAlign: "center"
  },
  image: {
    width: 60,
    height: 60
  },
  confirmButton: {
    ...button,
    backgroundColor: colors.BUTTON.BG_PRIMARY
  },
  confirmText: {
    fontSize: 20,
    color: "white"
  },
  cancelButton: {
    ...button,
    borderWidth: 1,
    borderColor: colors.ORANGE
  },
  cancelText: {
    fontSize: 20,
    color: colors.ORANGE
  }
});
