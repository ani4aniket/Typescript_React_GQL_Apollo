import React from "react";
import { View, StyleSheet } from "react-native";
import LoadingStrip from "../LoadingStrip";

interface Props {
  loading: boolean;
}

const MessageLoader: React.FunctionComponent<Props> = ({ loading }) =>
  loading
    ? Array(10)
        .fill(null)
        .map((element, index) => (
          <View
            key={index}
            style={{
              ...styles.container,
              flexDirection: index % 2 === 0 ? "row-reverse" : "row"
            }}
          >
            <LoadingStrip style={styles.image} />
            <View>
              <LoadingStrip style={styles.line} />
              <LoadingStrip style={styles.line} />
            </View>
          </View>
        ))
    : null;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 8
  },
  line: {
    width: 200
  }
});

export default MessageLoader;
