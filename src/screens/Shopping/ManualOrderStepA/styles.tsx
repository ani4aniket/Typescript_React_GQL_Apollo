import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    width: METRICS.WIDTH - 25,
    flex: 1
  },
  body: {
    width: "90%",
    alignSelf: "center"
  },
  heading: {
    fontWeight: "bold",
    fontSize: 15
  },
  productImagesView: {
    alignSelf: "center",
    flexDirection: "row"
  },
  inputView: {
    marginTop: 25
  }
});
