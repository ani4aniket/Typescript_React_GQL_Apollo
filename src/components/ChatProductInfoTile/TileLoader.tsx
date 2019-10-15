import React from "react";
import { View, StyleSheet } from "react-native";
import LoadingStrip from "../LoadingStrip";
import styles from "./styles";

interface Props {
  loading: boolean;
}

const TileLoader: React.FunctionComponent<Props> = ({ loading }) =>
  loading
    ? Array(1)
        .fill(null)
        .map((element, index) => (
          <View
            key={index}
            style={{
              ...styles.container
            }}
          >
            <LoadingStrip style={stylesLoad.image} />
            <View style={styles.productDetail}>
              <LoadingStrip style={stylesLoad.line} />
              <LoadingStrip style={stylesLoad.line} />
            </View>
          </View>
        ))
    : null;

const stylesLoad = StyleSheet.create({
  // container: {
  //   alignItems: "center",
  //   marginTop: 40
  // },
  image: {
    width: 70,
    height: 70,
    marginHorizontal: 8
  },
  line: {
    width: 150,
    backgroundColor: "#efefef",
    borderRadius: 10,
    overflow: "hidden",
    height: 18,
    padding: 2,
    marginTop: 6,
    paddingLeft: 0,
    color: "#484848"
  }
});

export default TileLoader;
