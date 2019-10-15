import * as React from "react";
import { View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

import { Color } from "csstype";

interface Props {
  color: Color;
  show: boolean;
  progress?: number;
  size: number;
}

const Loader: React.FunctionComponent<Props> = ({
  color,
  show,
  progress,
  size
}) =>
  show ? (
    <View style={styles.loading}>
      <Progress.Circle
        size={size}
        progress={progress || undefined}
        indeterminate={progress ? !(progress < 1 && progress > 0) : true}
        borderColor={
          progress && progress < 1 && progress > 0 ? "rgba(0,0,0,0)" : color
        }
        borderWidth={progress && (progress < 1 && progress > 0) ? 1 : 2.5}
        color={color}
      />
    </View>
  ) : null;

export default Loader;

const styles = StyleSheet.create({
  loading: {
    height: "100%",
    width: "100%",
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  }
});
