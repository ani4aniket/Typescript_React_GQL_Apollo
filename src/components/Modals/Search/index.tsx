import * as React from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ListRenderItemInfo
} from "react-native";
import { ApolloError } from "apollo-client";

import Icon, { IconType } from "../../Icon";
import Description from "../../Tiles/Description";
import Loader from "../../Loader";

import styles from "./styles";

interface Props<T> {
  loading?: boolean;
  data: T[] | null;
  error: ApolloError | undefined;
  query: string;
  placeholder: string;
  iconType: IconType;
  iconName: string;
  updateSearchQuery: (query: string) => void;
  onListItemSelect: (item: T) => void;
  dataRenderer: (item: T) => string;
  keyExtractor: (item: T, index: number) => string;
}

interface State {
  modalVisible: boolean;
}

const Search = <T extends object>({
  loading,
  data,
  error,
  updateSearchQuery,
  onListItemSelect,
  query,
  dataRenderer,
  iconName,
  iconType,
  placeholder,
  children,
  keyExtractor
}: Props<T> & { children: React.ReactNode }) => {
  const [state, updateState] = React.useState<State>({
    modalVisible: false
  });

  const setState = (newState: Partial<State>) =>
    updateState(prevState => ({ ...prevState, ...newState }));

  const showModal = () => setState({ modalVisible: true });

  const hideModal = () => setState({ modalVisible: false });

  const emptyQuery = () => updateSearchQuery("");

  const onSubmit = (element: T) => {
    hideModal();
    onListItemSelect(element);
  };

  const renderItem = ({ item }: ListRenderItemInfo<T>) => {
    const onPress = () => onSubmit(item);
    return (
      <TouchableOpacity style={styles.tile} onPress={onPress}>
        <Description iconType={iconType} iconName={iconName}>
          <Text style={styles.descriptionTextMd}>{dataRenderer(item)}</Text>
        </Description>
      </TouchableOpacity>
    );
  };

  const list = () => {
    console.log(error);
    if (error) return <Text>Something went wrong</Text>;
    if (loading) return <Loader show={loading} color="#999" size={20} />;
    return (
      <FlatList<T>
        keyboardShouldPersistTaps="handled"
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    );
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={state.modalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={hideModal}>
              <Icon
                type={IconType.ION_ICONS}
                name="md-arrow-back"
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              onChangeText={updateSearchQuery}
              value={query}
              underlineColorAndroid="transparent"
              placeholder={placeholder}
              placeholderTextColor="#eee"
              blurOnSubmit
              autoFocus
              selectionColor="white"
            />
            <TouchableOpacity
              onPress={emptyQuery}
              style={styles.headerRightButton}
            >
              {query ? (
                <Icon
                  type={IconType.ION_ICONS}
                  name="md-close"
                  color="white"
                  style={styles.icon}
                />
              ) : null}
            </TouchableOpacity>
          </View>
          {list()}
        </View>
      </Modal>
      <TouchableHighlight underlayColor="transparent" onPress={showModal}>
        {children}
      </TouchableHighlight>
    </View>
  );
};

export default Search;
