import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import TodoListPageHeader from '../Components/TodoListPageHeader.component';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import TodoItem from '../Components/TodoItem.component';
import {useSelector} from 'react-redux';
import {RootState} from '../Components/Store.component';
import { NavigationScreenProp } from 'react-navigation';

interface TodoListProps {
  navigation: NavigationScreenProp<any, any>;
  route: any;
}

const TodoList: React.FC<TodoListProps> = props => {
  const todo = useSelector((state: RootState) => state.Todo.todo);

  const OnPressFAB = () => {
    console.log('clicked');
    const value = props.route.params;
    props.navigation.navigate('todoDetails', {
      title: 'save',
      currentTodo: [],
    });
  };

  return (
    <>
      <View style={Styles.TodoListParentContainer}>
        <View style={Styles.TodoListChildContainer}>
          <TodoListPageHeader />
          <ScrollView>
            <View style={Styles.OverallList}>
              {todo.map(todoItem => (
                <TodoItem key={todoItem.id} todo={todoItem} naigation={props.navigation} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        style={Styles.FloatingActionButton}
        onPress={OnPressFAB}>
        <Image
          style={Styles.FloatingButton}
          source={require('../images/plus-circle.png')}
        />
      </TouchableOpacity>
    </>
  );
};

const Styles = StyleSheet.create({
  EmptyContainer: {
    height: windowHeight / 4,
  },
  TodoListParentContainer: {
    height: windowHeight,
    width: windowWidth,
    minHeight: windowHeight,
  },
  TodoListChildContainer: {
    marginLeft: 25,
    marginRight: 25,
  },
  FloatingButton: {
    resizeMode: 'contain',
  },
  FloatingActionButton: {
    height: windowHeight / 15,
    width: windowWidth / 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  OverallList: {
    marginBottom: 50,
  },
});
export default TodoList;
