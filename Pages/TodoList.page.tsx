import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import PageHeader from '../Components/PageHeader.component';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import TodoItem from '../Components/TodoItem.component';
import {useSelector} from 'react-redux';
import {RootState} from '../Components/Store.component';

interface TodoListProps {
  navigation: any;
  route: any;
}

const TodoList: React.FC<TodoListProps> = props => {
  const todo = useSelector((state: RootState) => state.createTodo.todo);

  const OnPressFABButton = () => {
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
          <PageHeader />
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
        style={Styles.TouchableOpacity}
        onPress={OnPressFABButton}>
        <Image
          style={Styles.FloatingButton}
          source={require('../images/plus-circle.png')}
        />
      </TouchableOpacity>
    </>
  );
};

const Styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  Header: {
    color: 'black',
  },
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
  TouchableOpacity: {
    height: windowHeight / 15,
    width: windowWidth / 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  contentContainer: {
    paddingVertical: 175,
  },
  Container: {
    width: windowWidth,
    minHeight: windowHeight,
  },
  OverallList: {
    marginBottom: 50,
  },
});
export default TodoList;
