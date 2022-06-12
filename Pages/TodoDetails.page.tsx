import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';

import KeyBoardAvoidWrapper from '../Components/KeyBoardAvoidWrapper.component';
import ShowPageHeader from '../Components/ShowPageHeader.component';
import CreateTodoComponent from '../Components/CreateTodo.component';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
interface ShowPageHeaderProps {
    navigation: any
    route: any
  }
  import Todo from '../models/Todo.model';
const TodoDetails: React.FC<ShowPageHeaderProps> = (props) => {
    var id =0
    let [todo,setTodo] =useState<Todo>()
    const value = props.route.params;
    const OnClickSaveButton =()=>{
        console.log("save")
        console.log(todo)
        props.navigation.navigate('todo');
    }
    const getTodo=(values: any)=>{
        // console.log(values)
        const todoItem: Todo ={
            id: id+1,
            title: values.title,
            description: values.description
        }
        // console.log(todoItem)
        setTodo(todoItem)
    }

  return (
    <View style={Styles.TodoListParentContainer}>
      <View style={Styles.TodoListChildContainer}>
        <ShowPageHeader navigation={props.navigation} title={value.title} OnclickSaveButton ={OnClickSaveButton} />
        <CreateTodoComponent todo ={getTodo} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  TodoListParentContainer: {
    height: windowHeight,
    width: windowWidth,
    minHeight: windowHeight + 100,
  },
  TodoListChildContainer: {
    marginLeft: 25,
    marginRight: 25,
  },
});
export default TodoDetails;
