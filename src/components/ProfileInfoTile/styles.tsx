import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    ...shadow,
    margin: 10,
    marginTop: 20,
    elevation: 5,
    height: 100,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE
  },
  firstTabView: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 50
  },
  secondTabView: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 50
  },
  separationView: {
    backgroundColor: "#cacaca",
    height: 1
  },
  firstTabText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#484848"
  },
  secondTabText: {
    fontSize: 18,
    color: "#484848",
    fontWeight: "bold"
  }
});
