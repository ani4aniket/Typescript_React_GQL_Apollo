import * as React from "react";
import { Modal, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import SearchBar from "../../SearchBar";
import { Color } from "csstype";

interface State {
  modalVisible: boolean;
}

interface Props {
  placeholder: string;
  buttonText: string;
  color: Color;
}

export default class SearchModal extends React.PureComponent<Props, State> {
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
    const { children, placeholder, buttonText, color } = this.props;
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={this._hideModal}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <SearchBar placeholder={placeholder} style={styles.search} />
              <View style={styles.bottom}>
                <TouchableOpacity
                  style={{ ...styles.button, backgroundColor: color }}
                  onPress={this._hideModal}
                >
                  <Text style={styles.text}>{buttonText}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={this._showModal}>
          {children}
        </TouchableOpacity>
      </View>
    );
  }
}
