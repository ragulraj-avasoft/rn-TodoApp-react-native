import React from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Todo from '../models/Todo.model';
import {RootState} from './Store.component';
const windowHeight = Dimensions.get('window').height;
let EXTENDEDSTRING = '...';
interface TodoItemProps {
  todo: Todo;
  naigation: any;
}
const TodoItem: React.FC<TodoItemProps> = props => {
  const todo = useSelector((state: RootState) => state.createTodo.todo);

  const OnPressTodoItem = () => {
    console.log('clicked');
    console.log(props.todo);
    console.log(props.todo.description.length);
    props.naigation.navigate('todoDetails', {
      title: 'edit',
      currentTodo: props.todo,
    });
  };

  return (
    <>
      <ScrollView>
        <View style={Styles.TodoItemcontainer}>
          {props.todo !== undefined &&
            (props.todo.id % 2 === 0 ? (
              <Pressable
                style={Styles.PressableContainer}
                onPress={() => OnPressTodoItem()}>
                <View style={Styles.PressableChildContainer}>
                  <Text style={Styles.Header}>{props.todo.title}</Text>
                  <Text style={Styles.Description}>
                    {props.todo.description !== undefined
                      ? props.todo.description.length < 20
                        ? props.todo.description
                        : props.todo.description.substring(0, 80) +
                          EXTENDEDSTRING
                      : null}
                  </Text>
                  <Text style={Styles.Date}>
                    Created at {props.todo.createdAt}
                  </Text>
                </View>
              </Pressable>
            ) : (
              <Pressable
                style={Styles.evenpressableContainer}
                onPress={() => OnPressTodoItem()}>
                <View style={Styles.PressableChildContainer}>
                  <Text style={Styles.Header}>{props.todo.title}</Text>
                  <Text style={Styles.Description}>
                    {props.todo.description !== undefined
                      ? props.todo.description.length < 20
                        ? props.todo.description
                        : props.todo.description.substring(0, 80) +
                          EXTENDEDSTRING
                      : null}
                  </Text>
                  <Text style={Styles.Date}>
                    Created at {props.todo.createdAt}
                  </Text>
                </View>
              </Pressable>
            ))}
        </View>
      </ScrollView>
    </>
  );
};
const Styles = StyleSheet.create({
  PressableChildContainer: {
    marginLeft: 15,
    marginTop: 5,
  },
  TodoItemcontainer: {
    paddingTop: 20,
  },
  PressableContainer: {
    backgroundColor: '#F76C6A',
    borderRadius: 15,
    height: 135,
  },
  evenpressableContainer: {
    backgroundColor: '#F79E89',
    borderRadius: 15,
    height: 135,
  },
  Header: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '800',
    color: 'white',
  },
  Description: {
    color: 'white',
    fontFamily: 'Montserrat-ExtraLight',
    fontWeight: '600',
    paddingTop: 10,
    height: 50,
  },
  Date: {
    color: 'white',
    paddingTop: 30,
    fontFamily: 'Montserrat-ExtraLight',
  },
  contentContainer: {
    paddingVertical: 40,
  },
});

export default TodoItem;
