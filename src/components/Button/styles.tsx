import { StyleSheet } from "react-native";
import { center, shadow } from "../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    ...center,
    ...shadow,
    shadowRadius: 2,
    shadowOffset: { height: 2.5, width: 0 },
    shadowColor: "rgba(0,0,0,0.5)",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    height: 50
  },
  text: {
    color: "white",
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    fontWeight: "600"
  },
  icon: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 32
  }
});
