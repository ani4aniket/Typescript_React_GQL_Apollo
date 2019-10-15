import { StyleSheet } from "react-native";
import { shadow } from "../../../theme/CommonStyles";
import METRICS from "../../../utils/metrics";
import { COLORS } from "../../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    width: METRICS.WIDTH - 25,
    alignSelf: "center"
  },
  header: {
    flexDirection: "row",
    padding: 10
  },
  arrowIcon: {
    marginLeft: 5,
    fontSize: 28
  },
  headerText: {
    fontSize: 18,
    color: "#f69e18",
    marginLeft: 15,
    fontWeight: "bold"
  },
  productDetailText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  noOfferText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ececec",
    textAlign: "center",
    padding: 30
  },
  productDetailView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  threeDotIcon: {
    fontSize: 22
  },
  sortView: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    borderColor: "#f69e18",
    borderWidth: 1,
    backgroundColor: COLORS.WHITE,
    elevation: 5,
    ...shadow
  },
  sortText: {
    fontSize: 13,
    color: "#f69e18"
  },
  sortContainer: {
    position: "absolute",
    height: 220,
    alignSelf: "flex-end",
    width: 150,
    marginTop: METRICS.HEIGHT - 300,
    flex: 1,
    elevation: 5,
    marginRight: 20,
    backgroundColor: COLORS.WHITE,
    ...shadow,
    borderRadius: 10
  },
  sortRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    justifyContent: "space-between"
  },
  sortHeaderText: {
    fontSize: 14,
    margin: 5,
    color: "#484848",
    alignSelf: "center",
    fontWeight: "bold"
  },
  sortFooterText: {
    fontSize: 14,
    margin: 5,
    color: "#484848",
    alignSelf: "center"
  },
  separationView: {
    height: 1,
    backgroundColor: "#f5f5f5"
  }
});
