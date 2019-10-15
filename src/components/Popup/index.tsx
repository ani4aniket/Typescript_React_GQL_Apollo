import * as React from "react";
import { Modal, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import colors from "../../theme/colors";

interface State {
  modalVisible: boolean;
}

interface Props {
  modalStatus?: boolean;
  heading: string;
}
interface Option {
  value: string;
  selected?: boolean;
  onPress: () => void;
}

interface DetailedOption extends Option {
  subValue?: string;
}

export default class Popup extends React.PureComponent<Props, State> {
  state = {
    modalVisible: false
  };

  _showModal = () => {
    this.setState({ modalVisible: true });
  };

  _hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { modalStatus, heading } = this.props;
    const { modalVisible } = this.state;
    const { button, options } = this.props.children;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent
          visible={modalStatus || modalVisible}
          onRequestClose={this._hideModal}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <View style={[styles.border]}>
                <Text style={styles.heading}>{heading}</Text>
              </View>
              {options}
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={this._showModal}>{button}</TouchableOpacity>
      </View>
    );
  }
}

export const Option: React.FunctionComponent<Option> = ({
  value,
  selected,
  onPress
}) => (
  <TouchableOpacity style={styles.options} onPress={onPress}>
    <Text style={[styles.text, selected ? { color: colors.ORANGE } : null]}>
      {value}
    </Text>
  </TouchableOpacity>
);

export const DetailedOption: React.FunctionComponent<DetailedOption> = ({
  onPress,
  subValue,
  value,
  selected
}) => (
  <TouchableOpacity style={styles.descriptionOptions} onPress={onPress}>
    <Text style={styles.key}>{value}</Text>
    {subValue && (
      <Text style={[styles.value, selected ? { color: colors.ORANGE } : null]}>
        {subValue}
      </Text>
    )}
  </TouchableOpacity>
);
