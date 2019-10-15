import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LoadingStrip from "../LoadingStrip";
import styles from "./styles";

interface Props {
  loading: boolean;
}

const RewardTileLoader: React.FunctionComponent<Props> = ({ loading }) =>
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
            <View style={styles.rewardView}>
              <View style={styles.columnView}>
                <LoadingStrip style={stylesLoad.textLoading} />
                <LoadingStrip style={stylesLoad.line} />
              </View>
              <View style={styles.columnView}>
                <LoadingStrip style={stylesLoad.textLoading} />
                <LoadingStrip style={stylesLoad.line} />
              </View>
            </View>
            <View style={styles.rewardView}>
              <View style={styles.columnView}>
                <LoadingStrip style={stylesLoad.textLoading} />
                <LoadingStrip style={stylesLoad.line} />
              </View>
              <View style={styles.columnView}>
                <LoadingStrip style={stylesLoad.textLoading} />
                <LoadingStrip style={stylesLoad.line} />
              </View>
            </View>
            <View style={styles.rewardView}>
              <View style={styles.columnView}>
                <LoadingStrip style={stylesLoad.textLoading} />
                <LoadingStrip style={stylesLoad.smLine} />
              </View>
              <View style={styles.columnView}>
                <LoadingStrip style={stylesLoad.textLoading} />
                <LoadingStrip style={stylesLoad.smLine} />
              </View>
            </View>
          </View>
        ))
    : null;

const stylesLoad = StyleSheet.create({
  line: {
    width: 150,
    backgroundColor: "#efefef",
    // borderRadius: 10,
    overflow: "hidden",
    height: 50,
    padding: 2,
    marginTop: 6,
    paddingLeft: 0,
    color: "#484848"
  },
  smLine: {
    width: 150,
    backgroundColor: "#efefef",
    // borderRadius: 10,
    overflow: "hidden",
    height: 30,
    padding: 2,
    marginTop: 6,
    paddingLeft: 0,
    color: "#484848"
  },
  textLoading: {
    width: 150,
    backgroundColor: "#efefef",
    // borderRadius: 10,
    overflow: "hidden",
    height: 15,
    padding: 2,
    marginTop: 6,
    paddingLeft: 0,
    color: "#484848"
  }
});

export default RewardTileLoader;
