import React, {useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView} from 'react-native';

import styles from './App.styles';

import TitleBar from './components/TitleBar';
import TaskList from './components/TaskList/TaskList';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [toDo, setToDo] = useState({task: toDo, isComplete: false, id: '0'});
  const [toDoArray, setToDoArray] = useState([]);

  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={styles.main_container}>
      <TitleBar info={counter} />
      <KeyboardAvoidingView
        behavior={'height'}
        style={styles.container_two}
        keyboardVerticalOffset={40}>
        <TaskList
          tasks={toDoArray}
          numOfTask={counter}
          setCounter={setCounter}
          setToDoArray={setToDoArray}
        />
        <SearchBar
          toDo={toDo}
          toDoArray={toDoArray}
          setCounter={setCounter}
          setToDoArray={setToDoArray}
          setToDo={setToDo}
          numOfTask={counter}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
