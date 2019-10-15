import * as React from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  ViewStyle,
  TextStyle
} from "react-native";
import Icon, { IconType } from "../Icon";
import styles from "./styles";
import { shadow } from "../../theme/CommonStyles";

interface Props {
  placeholder: string;
  style?: ViewStyle;
  shade?: boolean;
  close?: boolean;
  inputStyle?: TextStyle | ViewStyle;
  placeholderTextColor?: string;
}

const SearchBar: React.FunctionComponent<Props> = ({
  placeholder,
  style,
  shade,
  close,
  inputStyle,
  placeholderTextColor
}) => {
  return (
    <View style={[styles.destinationInputView, style, shade ? shadow : null]}>
      <Icon
        type={IconType.EVIL_ICONS}
        name="search"
        style={styles.searchIcon}
      />
      <TextInput
        style={[styles.destinationInput, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      {close ? (
        <TouchableOpacity>
          <Icon
            type={IconType.ANT_DESIGN}
            name="closecircle"
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SearchBar;
