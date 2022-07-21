import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';

import styles from './SearchBar.style';

const SearchBar = props => {
  var updatedValue = {};

  const btnHandler = () => {
    if (props.toDo != null) {
      updatedValue = {
        task: props.toDo,
        isComplete: false,
        id: props.toDoArray.length.toString(),
      };
      props.setToDoArray([...props.toDoArray, updatedValue]);
      props.setCounter(props.numOfTask + 1);
    }
    props.setToDo(null);
  };

  const txtHandler = text => {
    props.setToDo(text);
  };

  return (
    <View style={styles.search_bar_container}>
      <TextInput
        style={styles.search_bar_text_input}
        placeholder="Yapılacak..."
        placeholderTextColor="#808080"
        value={props.toDo}
        onChangeText={txtHandler}
      />
      <View style={styles.search_bar_hr} />
      <TouchableOpacity
        style={styles.search_bar_button}
        title="Kaydet"
        onPress={btnHandler}>
        <Text style={styles.search_bar_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
