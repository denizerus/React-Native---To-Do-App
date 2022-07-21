import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  main_container: {backgroundColor: '#102027', flex: 1, padding: 10},
  container_two: {flex: 1, justifyContent: 'space-between'},
  search_bar_container: {
    backgroundColor: '#37474f',
    marginBottom: 40,
    padding: 10,
    borderRadius: 10,
  },
  task_list_container: {flex: 1, flexDirection: 'column-reverse'},
  task_container: {marginTop: 20, flex: 1, flexDirection: 'column-reverse'},
  task_text: {fontSize: 24, color: '#fff'},
});
