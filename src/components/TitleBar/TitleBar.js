import React from 'react';
import {View, Text} from 'react-native';
import styles from './TitleBar.style';

const TitleBar = ({info}) => {
  return (
    <View style={styles.title_container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.title_num}>{info}</Text>
    </View>
  );
};

export default TitleBar;
