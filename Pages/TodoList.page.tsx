import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import PageHeader from '../Components/PageHeader.component';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {useCallback, useMemo, useRef} from 'react';
import TodoItem from '../Components/TodoItem.component';
import Todo from '../models/Todo.model';

interface TodoListProps {
  navigation: any;
  route: any;
}

const TodoList: React.FC<TodoListProps> = props => {
  const OnPressFABButton = () => {
    console.log('clicked');
    const value = props.route.params;
    props.navigation.navigate('todoDetails',{
      title: "save"
    })
  };

  const todo: Todo[] = [
    {
      title: 'Design Logo',
      description: 'MakeLogofor the mini Project',
      id: 1,
    },
    {
      id: 2,
      title: 'Design Logo',
      description: 'MakeLogofor the mini Project',
    },
    {
      id: 3,
      title: 'Design Logo',
      description: 'MakeLogofor the mini Project',
    },
    {
      id: 4,
      title: 'Design Logo',
      description: 'MakeLogofor the mini Project',
    },
    {
      id: 5,
      title: 'Design Logo',
      description: 'MakeLogofor the mini Project',
    },
    {
      id: 6,
      title: 'Design Logo',
      description: 'MakeLogofor the mini Project',
    },
    {
      id: 7,
      title: 'Design Logo',
      description: 'MakeLogofor the mini Project',
    },
    {
      id: 8,
      title: 'Design Logo',
      description: 'MakeLogofor the mini Project',
    },
    {
      id: 9,
      title: 'Design Logo',
      description: 'MakeLogofor the mini Project',
    },
    {
      id: 10,
      title: 'Design Logo',
      description: 'MakeLogofor the mini Project',
    },
  ];
  return (
    <>
      <View style={Styles.TodoListParentContainer}>
        <View style={Styles.TodoListChildContainer}>
          <PageHeader />
          <TodoItem todoItem={todo} naigation={props.navigation} />
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
    // backgroundColor: 'blue',
    height: windowHeight / 4,
  },
  TodoListParentContainer: {
    height: windowHeight,
    width: windowWidth,
    minHeight: windowHeight + 100,
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
    // height: windowHeight,
    width: windowWidth,
    // minWidth: '20%',
    // maxWidth: 500,
    minHeight: windowHeight,
    // maxHeight: windowHeight + 40 ,
  },
});
export default TodoList;
