import * as React from "react";
import {
  View,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  DatePickerIOS,
  Text,
  Platform,
  DatePickerAndroid
} from "react-native";

import styles from "./styles";

interface State {}
interface Props {
  date: Date;
  children: React.ReactChild;
  mode: "date" | "time" | "datetime";
  onDateChange: (e: Date) => void;
}

class DateTimeModal extends React.PureComponent<Props, State> {
  state = {
    modalVisible: false
  };

  _showModal = () => {
    this.setState({ modalVisible: true });
  };

  _hideModal = () => {
    this.props.onDateChange(this.props.date);
    this.setState({ modalVisible: false });
  };

  _androidDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // May 25 2020. Month 0 is January.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        this.props.onDateChange(new Date(`${year}-${month - 1}-${day}`));
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };

  render() {
    const { modalVisible } = this.state;
    const { children, date, mode, onDateChange } = this.props;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={this._hideModal}
        >
          {Platform.OS === "ios" ? (
            <TouchableHighlight
              style={styles.container}
              onPress={this._hideModal}
            >
              <View style={styles.modal}>
                <TouchableOpacity onPress={this._hideModal}>
                  <Text style={styles.modalText}>Done</Text>
                </TouchableOpacity>
                <DatePickerIOS
                  mode={mode}
                  date={date || new Date()}
                  onDateChange={onDateChange}
                />
              </View>
            </TouchableHighlight>
          ) : null}
        </Modal>
        <TouchableOpacity
          onPress={
            Platform.OS === "ios" ? this._showModal : this._androidDatePicker
          }
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  }
}

export default DateTimeModal;
