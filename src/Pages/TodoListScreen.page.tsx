import React from 'react';
import TodoListPageHeader from '../Components/TodoListPageHeader.component';
import TodoItem from '../Components/TodoItem.component';
import {useSelector} from 'react-redux';
import {RootState} from '../Store';
import {NavigationScreenProp} from 'react-navigation';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import WindowSize from '../config/Measurement';


interface TodoListProps {
  navigation: NavigationScreenProp<any, any>;
  route: any;
}

const TodoList: React.FC<TodoListProps> = props => {
  const todo = useSelector((state: RootState) => state.Todo.todo);

  const OnPressFAB = () => {
    const value = props.route.params;
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
              {todo.map(todoItem => (
                <TodoItem
                  key={todoItem.id}
                  todo={todoItem}
                  naigation={props.navigation}
                />
              ))}
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
    width:WindowSize.windowWidth,
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
