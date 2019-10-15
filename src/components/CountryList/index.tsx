import * as React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { countryList, getAlphabets } from "../../utils/constants";
import Icon, { IconType } from "../Icon";

interface Props {
  disabled: boolean;
}

interface State {}

class CountryList extends React.PureComponent<Props, State> {
  render() {
    const { disabled } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          {countryList.map((element, index) => {
            return (
              <TouchableOpacity
                style={styles.tile}
                key={index}
                disabled={disabled}
              >
                <Text style={styles.text}>{element.name}</Text>
                <Icon
                  type={IconType.ANT_DESIGN}
                  name="check"
                  style={styles.icon}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <ScrollView style={styles.dictionaryScroll}>
          {getAlphabets().map(element => (
            <TouchableOpacity style={styles.dictionaryView} key={element}>
              <Text style={styles.dictionarytext}>{element}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default CountryList;
