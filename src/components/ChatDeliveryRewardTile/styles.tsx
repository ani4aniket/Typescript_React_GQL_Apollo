import { StyleSheet } from "react-native";
import { shadow } from "../../theme/CommonStyles";
import metrics from "../../utils/metrics";

export default StyleSheet.create({
  container: {
    ...shadow,
    width: metrics.WIDTH - 25,
    padding: 10,
    marginVertical: 8,
    flexDirection: "column",
    borderRadius: 9,
    elevation: 5,
    backgroundColor: "#eeeeee",
    overflow: "hidden"
  },
  rewardView: {
    flexDirection: "row",
    marginTop: 10
  },
  columnView: {
    flexDirection: "column",
    flex: 1
  },
  titleText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#484848"
  },
  inputView: {
    backgroundColor: "white",
    padding: 8,
    marginTop: 10,
    width: "90%",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: "500",
    color: "#484848",
    textAlign: "center"
  },
  textView: {
    color: "#484848",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold"
  }
});
