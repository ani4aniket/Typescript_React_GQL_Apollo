import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Icon, { IconType } from "../../Icon";

interface Props {
  iconName: string;
  iconType: IconType;
}

const Description: React.FunctionComponent<Props> = ({
  iconName,
  iconType,
  children
}) => {
  return (
    <View style={[styles.container, styles.border]}>
      {iconName && (
        <View style={styles.iconView}>
          <Icon name={iconName} type={iconType} style={styles.icon} />
        </View>
      )}
      <View style={[styles.body, iconName ? null : { paddingLeft: 20 }]}>
        {children}
      </View>
    </View>
  );
};

export default Description;
