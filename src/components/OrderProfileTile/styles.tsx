import { StyleSheet } from "react-native";
import METRICS from "../../utils/metrics";

export default StyleSheet.create({
  container: {
    height: METRICS.WIDTH,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(112, 112, 112, 0.2)"
  },
  wrapper: {},
  image: {
    width: METRICS.WIDTH,
    height: METRICS.WIDTH * 1.08
  },
  blurredImage: {
    width: METRICS.WIDTH,
    height: 65
  },
  detailView: {
    flex: 1,
    flexDirection: "row"
  },
  currency: {
    marginLeft: METRICS.WIDTH / 3,
    padding: 20,
    fontSize: 20,
    fontWeight: "bold"
  },
  dotMargin: {
    marginBottom: -30
  },
  brand: {
    padding: 10,
    fontSize: 15
  },
  product: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: "bold"
  }
});
