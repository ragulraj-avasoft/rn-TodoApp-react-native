import React from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Todo from '../models/Todo.model';
let EXTENDEDSTRING = '...';
interface TodoItemProps {
  todo: Todo;
  naigation: any;
}
const TodoItem: React.FC<TodoItemProps> = props => {
  const OnPressTodo = () => {
    props.naigation.navigate('todoDetails', {
      title: 'edit',
      currentTodo: props.todo,
    });
  };
  const CalculateDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let date: Date = props.todo.createdAt;
    var day = date.getDate().toString()
    let monthName = months[date.getMonth()];
    var year = date.getFullYear().toString();
    var createdDate = day + ' ' + monthName + ' ' + year;
    return createdDate;
  };

  return (
    <>
      <ScrollView>
        <View style={Styles.todoItemcontainer}>
          {props.todo !== undefined &&
            (props.todo.id % 2 === 0 ? (
              <Pressable
                style={Styles.pressableContainer}
                onPress={() => OnPressTodo()}>
                <View style={Styles.pressableChildContainer}>
                  <Text style={Styles.header}>{props.todo.title}</Text>
                  <Text style={Styles.description}>
                    {props.todo.description !== undefined
                      ? props.todo.description.length < 20
                        ? props.todo.description
                        : props.todo.description.substring(0, 80) +
                          EXTENDEDSTRING
                      : null}
                  </Text>
                  <Text style={Styles.date}>
                    Created at {CalculateDate()}
                  </Text>
                </View>
              </Pressable>
            ) : (
              <Pressable
                style={Styles.evenpressableContainer}
                onPress={() => OnPressTodo()}>
                <View style={Styles.pressableChildContainer}>
                  <Text style={Styles.header}>{props.todo.title}</Text>
                  <Text style={Styles.description}>
                    {props.todo.description !== undefined
                      ? props.todo.description.length < 20
                        ? props.todo.description
                        : props.todo.description.substring(0, 80) +
                          EXTENDEDSTRING
                      : null}
                  </Text>
                  <Text style={Styles.date}>
                    Created at {CalculateDate()}
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
  pressableChildContainer: {
    marginLeft: 15,
    marginTop: 5,
  },
  todoItemcontainer: {
    paddingTop: 20,
  },
  pressableContainer: {
    backgroundColor: '#F76C6A',
    borderRadius: 15,
    height: 135,
  },
  evenpressableContainer: {
    backgroundColor: '#F79E89',
    borderRadius: 15,
    height: 135,
  },
  header: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '800',
    color: 'white',
  },
  description: {
    color: 'white',
    fontFamily: 'Montserrat-ExtraLight',
    fontWeight: '600',
    paddingTop: 10,
    height: 50,
  },
  date: {
    color: 'white',
    paddingTop: 30,
    fontFamily: 'Montserrat-ExtraLight',
  },
});

export default TodoItem;
