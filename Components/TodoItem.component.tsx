import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Todo from '../models/Todo.model';
const windowHeight = Dimensions.get('window').height;

interface ButtonProps {
  todoItem: Todo[];
  naigation: any;
}

const TodoItem: React.FC<ButtonProps> = props => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  const OnPressTodoItem = () => {
    console.log('clicked');
    props.naigation.navigate('todoDetails',{
      title: "edit"
    })
  };

  return (
    <>
      <ScrollView>
        <View style={Styles.TodoItemcontainer}>
          {props.todoItem.map(item =>
            item.id % 2 === 0 ? (
              <Pressable
                style={Styles.PressableContainer}
                onPress={() => OnPressTodoItem()}>
                <View style={Styles.PressableChildContainer}>
                  <Text style={Styles.Header}>{item.title}</Text>
                  <Text style={Styles.Description}>{item.description}</Text>
                  <Text style={Styles.Date}>
                    created at {date}/{month}/{year}
                  </Text>
                </View>
              </Pressable>
            ) : (
              <Pressable
                style={Styles.evenpressableContainer}
                onPress={() => OnPressTodoItem()}>
                <View style={Styles.PressableChildContainer}>
                  <Text style={Styles.Header}>{item.title}</Text>
                  <Text style={Styles.Description}>{item.description}</Text>
                  <Text style={Styles.Date}>
                    created at {date}/{month}/{year}
                  </Text>
                </View>
              </Pressable>
            ),
          )}
        </View>
      </ScrollView>
    </>
  );
};
const Styles = StyleSheet.create({
  PressableChildContainer: {
    marginLeft: 15,
    // backgroundColor: 'red',
  },
  TodoItemcontainer: {
    paddingTop: 20,
    // minHeight: windowHeight
  },
  PressableContainer: {
    backgroundColor: '#F76C6A',
    borderRadius: 15,
    height: 124,
    marginBottom: 20,
  },
  evenpressableContainer: {
    backgroundColor: '#F79E89',
    borderRadius: 15,
    height: 124,
    marginBottom: 20,
  },
  Header: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  Description: {
    color: 'white',
    paddingTop: 10,
  },
  Date: {
    color: 'white',
    paddingTop: 40,
  },
  contentContainer: {
    paddingVertical: 40,
  },
});

export default TodoItem;
