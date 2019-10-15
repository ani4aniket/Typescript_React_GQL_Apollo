import * as React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";

interface Props {
  placeholder: string;
  heading: string;
  value?: string;
  onChangeText: (e: string) => void;
}

const Input: React.FunctionComponent<Props> = ({
  placeholder,
  heading,
  value,
  onChangeText
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{heading}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
