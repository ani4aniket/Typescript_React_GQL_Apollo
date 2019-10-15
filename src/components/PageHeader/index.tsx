import * as React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Color } from "csstype";

interface Props {
  page: 1 | 2 | 3;
  color: Color;
}

const PageHeader: React.FunctionComponent<Props> = ({ page, color }) => {
  const selectedView = {
    ...styles.selectedView,
    backgroundColor: color,
    shadowColor: color,
    borderColor: color
  };
  return (
    <View style={styles.container}>
      <View style={selectedView}>
        <Text style={styles.selectedText}>1</Text>
      </View>
      <View
        style={
          page >= 2
            ? { ...styles.selectedline, borderColor: color }
            : styles.unselectedline
        }
      />
      <View
        style={
          page >= 2
            ? selectedView
            : { ...styles.unselectedView, borderColor: color }
        }
      >
        <Text style={page >= 2 ? styles.selectedText : styles.unselectedText}>
          2
        </Text>
      </View>
      <View
        style={
          page >= 3
            ? { ...styles.selectedline, borderColor: color }
            : styles.unselectedline
        }
      />
      <View
        style={
          page >= 3
            ? selectedView
            : { ...styles.unselectedView, borderColor: color }
        }
      >
        <Text style={page >= 3 ? styles.selectedText : styles.unselectedText}>
          3
        </Text>
      </View>
    </View>
  );
};

export default PageHeader;
