import React, {useEffect, useState} from 'react';
import TodoListPageHeader from '../Components/TodoListPageHeader.component';
import TodoItem from '../Components/TodoItem.component';
import {NavigationScreenProp} from 'react-navigation';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import WindowSize from '../config/Measurement';
import Todo from '../models/Todo.model';
import AlterTodo from '../TodoDataBase';

interface TodoListProps {
  navigation: NavigationScreenProp<any, any>;
  route: any;
}

const TodoList: React.FC<TodoListProps> = props => {
  let [allTodo, setAllTodo] = useState<Todo[]>();
  useEffect(() => {
    fetcchTodo();
  }, []);
  const fetcchTodo = async () => {
    let todo = await AlterTodo.getAllTodo();
    setAllTodo(todo);
    try {
      let todoRealm: Realm.Results<Realm.Object> =
        await AlterTodo.getRealmObject();
      todoRealm.addListener(async () => {
        let todo = await AlterTodo.getAllTodo();
        setAllTodo(todo);
      });
    } catch (error) {
      console.error(
        `Unable to update the tasks' state, an exception was thrown within the change listener: ${error}`,
      );
    }
  };

  const OnPressFAB = () => {
    props.navigation.navigate('todoDetails', {
      title: 'save',
      currentTodo: [],
    });
  };

  return (
    <>
      <View style={Styles.todoListParentContainer}>
        <View style={Styles.todoListChildContainer}>
          <TodoListPageHeader />
          <ScrollView>
            <View style={Styles.overallList}>
              {allTodo !== undefined
                ? allTodo.map((todoItem: Todo) => (
                    <TodoItem
                      key={todoItem.id}
                      todo={todoItem}
                      naigation={props.navigation}
                    />
                  ))
                : null}
            </View>
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        style={Styles.floatingActionButton}
        onPress={OnPressFAB}>
        <Image
          style={Styles.floatingButton}
          source={require('../images/plus-circle.png')}
        />
      </TouchableOpacity>
    </>
  );
};

const Styles = StyleSheet.create({
  todoListParentContainer: {
    height: WindowSize.windowHeight,
    width: WindowSize.windowWidth,
    minHeight: WindowSize.windowHeight,
  },
  todoListChildContainer: {
    marginLeft: 25,
    marginRight: 25,
  },
  floatingButton: {
    resizeMode: 'contain',
  },
  floatingActionButton: {
    height: WindowSize.windowHeight / 15,
    width: WindowSize.windowWidth / 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  overallList: {
    marginBottom: 50,
  },
});
export default TodoList;
