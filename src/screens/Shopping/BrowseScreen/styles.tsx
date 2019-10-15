import { StyleSheet } from "react-native";
import METRICS from "../../../utils/metrics";
import { heading, border } from "../../../theme/CommonStyles";

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    width: METRICS.WIDTH - 25,
    flex: 1
  },
  category: {
    ...border,
    paddingVertical: 20
  },
  categoryText: {
    ...heading,
    fontSize: 12
  },
  text: {
    ...heading
  },
  bottomView: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    paddingHorizontal: 0
  },
  buttonView: {
    flex: 1,
    alignItems: "flex-end"
  },
  productTileView: {
    width: METRICS.WIDTH,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: { marginRight: 0 },
  searchBar: {
    backgroundColor: "#f5f5f5"
  },
  searchBarView: {
    ...border,
    paddingBottom: 16
  },
  nameView: {
    paddingVertical: 12
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  nameButton: {
    width: 74,
    margin: 6
  }
});
