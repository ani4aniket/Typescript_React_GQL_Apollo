import React from "react";
import {
  PlaceholderContainer,
  Placeholder
} from "react-native-loading-placeholder";
import LinearGradient from "react-native-linear-gradient";
import { ViewStyle } from "react-native";

interface Props {
  style?: ViewStyle;
}

const Gradient: React.FunctionComponent = () => {
  return (
    <LinearGradient
      colors={["#eeeeee", "#dadada", "#eeeeee"]}
      start={{ x: 1.0, y: 0.0 }}
      end={{ x: 0.0, y: 0.0 }}
      style={{
        flex: 1,
        width: "40%"
      }}
    />
  );
};

const LoadingStrip: React.FunctionComponent<Props> = ({ style }) => (
  <PlaceholderContainer
    animatedComponent={<Gradient />}
    duration={1000}
    delay={500}
    loader={false}
  >
    <Placeholder
      style={{
        width: "90%",
        height: 8,
        marginTop: 6,
        alignSelf: "flex-start",
        justifyContent: "center",
        backgroundColor: "#eeeeee",
        ...style
      }}
    />
  </PlaceholderContainer>
);

export default LoadingStrip;
