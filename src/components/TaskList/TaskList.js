import React from 'react';
import styles from './TaskList.style';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

const TaskList = props => {
  const completeTask = index => {
    let copyItems = [...props.tasks];
    if (copyItems[index].isComplete === false) {
      copyItems[index].isComplete = true;
      props.setCounter(props.numOfTask - 1);
      props.setToDoArray(copyItems);
    }
  };
  return (
    <View style={styles.task_container}>
      <ScrollView>
        <Text style={styles.task_text}>
          {props.tasks.length === 0 ? '' : 'Yapılacaklar Listesi'}
        </Text>
        <View style={styles.task_list_container}>
          {props.tasks.map((item, index) => {
            let task_style = {};
            let task_background_style = {};
            if (item.isComplete) {
              task_style = {
                color: '#808080',
                fontSize: 20,
                textDecorationLine: 'line-through',
              };
              task_background_style = {
                backgroundColor: '#37474f',
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
              };
            } else {
              task_style = {color: '#fff', fontSize: 20};
              task_background_style = {
                backgroundColor: '#7da453',
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
              };
            }
            return (
              <TouchableOpacity
                style={task_background_style}
                key={index}
                onPress={() => completeTask(index)}>
                <Text style={task_style}>{item.task}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskList;
