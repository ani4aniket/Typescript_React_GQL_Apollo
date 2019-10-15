import * as React from "react";
import { Modal, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

interface State {
  modalVisible: boolean;
}

interface Props {
  travel?: boolean;
  buttonText: string;
  modalStatus?: boolean;
  heading: string;
  description?: string;
  subHeading?: string;
  alert?: boolean;
  color?: string;
  onPress?: () => void;
}

export default class AlertModal extends React.PureComponent<Props, State> {
  state = {
    modalVisible: false
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const {
      children,
      buttonText,
      modalStatus,
      onPress,
      heading,
      subHeading,
      description,
      alert,
      color,
      travel
    } = this.props;
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal
          transparent
          animationType="slide"
          visible={modalStatus || modalVisible}
          onRequestClose={this.hideModal}
        >
          <View style={styles.container}>
            <View style={[styles.modalView, alert ? { height: 152 } : null]}>
              <View style={styles.body}>
                <Text style={styles.heading}>{heading}</Text>
                {alert ? null : (
                  <View>
                    <Text
                      style={[
                        styles.subHeading,
                        { color: travel ? "#8d8d8d" : color }
                      ]}
                    >
                      {subHeading}
                    </Text>
                    <Text style={styles.description}>{description}</Text>
                  </View>
                )}
              </View>
              <View style={styles.bottom}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    color ? { backgroundColor: color } : null
                  ]}
                  onPress={onPress || this.hideModal}
                >
                  <Text style={styles.text}>{buttonText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={this.showModal}>{children}</TouchableOpacity>
      </View>
    );
  }
}
