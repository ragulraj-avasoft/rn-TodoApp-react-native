import React, {useEffect, useState} from 'react';
import Todo from '../models/Todo.model';
import DeletePopUp from '../Components/DeletePopUp.component';
import TodoDetailsPageHeader from '../Components/TodoDetailsPageHeader.component';
import CreateTodoComponent from '../Components/CreateTodo.component';
import {NavigationScreenProp} from 'react-navigation';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import WindowSize from '../config/Measurement';
import AlterTodo from '../TodoDataBase';

interface TOdoDetailsProps {
  navigation: NavigationScreenProp<any, any>;
  route: any;
}
const TodoDetails: React.FC<TOdoDetailsProps> = props => {
  const value = props.route.params;
  let [imageUri, setImageUri] = useState(value.currentTodo.imageUri);
  let [singleTodo, setSingleTodo] = useState<Todo>(value.currentTodo);
  let [isCloseButtonClicked, setCloseButtonClicked] = useState(false);
  let [deleteClicked, setDeleteClicked] = useState(false);
  let id = 0;
  useEffect(() => {
    if (value.title === 'edit' && imageUri != undefined) {
      setCloseButtonClicked(true);
    }
  }, []);

  const calculateDate = () => {
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
    let date: Date = new Date(value.currentTodo.createdAt);
    var day = date.getDate().toString();
    let monthName = months[date.getMonth()];
    var year = date.getFullYear().toString();
    var createdDate = day + ' ' + monthName + ' ' + year;
    return createdDate;
  };

  const onSave = async () => {
    if (singleTodo !== undefined) {
      if (singleTodo.description === undefined) {
        singleTodo.description = '';
      }
      await AlterTodo.createTodo(singleTodo);
      console.log('created');
      props.navigation.navigate('todo');
    }
  };

  const onEdit = async () => {
    if (singleTodo !== undefined) {
      singleTodo.id = value.currentTodo.id;
      singleTodo.createdAt = value.currentTodo.createdAt;
      singleTodo.imageUri = imageUri;
      setImageUri(imageUri);
      await AlterTodo.editTodo(singleTodo.id, singleTodo);
      props.navigation.navigate('todo');
    }
  };

  const onDelete = async () => {
    await AlterTodo.deleteTodo(value.currentTodo.id);
    props.navigation.navigate('todo');
  };

  const addImage = (imageUri: string) => {
    setImageUri(imageUri);
    const TodoClone = {...singleTodo};
    TodoClone.imageUri = imageUri;
    setSingleTodo(TodoClone);
    if (imageUri !== '') {
      setCloseButtonClicked(true);
    } else {
      setCloseButtonClicked(false);
    }
  };

  const getTodo = (values: any) => {
    const todoItem: Todo = {
      id: 0,
      title: values.title,
      description: values.description,
      createdAt: new Date(),
      imageUri: '',
    };
    setSingleTodo(todoItem);
  };

  const onClose = () => {
    setImageUri('');
    addImage('');
  };

  const showPopUp = () => {
    setDeleteClicked(true);
  };

  const closePopUp = () => {
    setDeleteClicked(false);
  };

  return (
    <>
      {deleteClicked === true ? (
        <DeletePopUp popUp={closePopUp} onDelete={onDelete} />
      ) : null}
      <View style={Styles.todoListParentContainer}>
        <View style={Styles.todoListChildContainer}>
          <TodoDetailsPageHeader
            navigation={props.navigation}
            title={value.title}
            onSave={onSave}
            onEdit={onEdit}
            showPopUp={showPopUp}
            addImage={addImage}
          />
          <CreateTodoComponent
            todo={getTodo}
            value={value.currentTodo}
            imageuri={imageUri}
          />
        </View>
        {isCloseButtonClicked === true && imageUri !== '' ? (
          <View style={Styles.imageContainer}>
            <Pressable style={Styles.closeButtoncontainer} onPress={onClose}>
              <Image
                style={Styles.closeButton}
                source={require('../images/closeButton.png')}
              />
            </Pressable>
            <Image style={Styles.imageSize} source={{uri: imageUri}} />
          </View>
        ) : null}
        {value.title === 'edit' ? (
          <View style={Styles.createdAtContainer}>
            <Text style={Styles.createdAt}>Created at {calculateDate()}</Text>
          </View>
        ) : null}
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  todoListParentContainer: {
    height: WindowSize.windowHeight,
    width: WindowSize.windowWidth,
    zIndex: 0,
  },
  todoListChildContainer: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  createdAtContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  createdAt: {
    color: '#272727',
    fontFamily: 'Montserrat-ExtraLight',
  },
  imageContainer: {
    position: 'relative',
    marginTop: 10,
    zIndex: 1,
    height: WindowSize.windowHeight / 1.8,
    width: WindowSize.windowWidth / 1,
  },
  imageSize: {
    height: WindowSize.windowHeight / 2,
    width: WindowSize.windowWidth / 1.2,
    alignSelf: 'center',
    zIndex: 2,
  },
  closeButton: {
    marginTop: 5,
    marginRight: 5,
    width: 25,
    height: 25,
    position: 'absolute',
    zIndex: 4,
    alignSelf: 'flex-end',
    top: 5,
    right: 5,
  },
  closeButtoncontainer: {
    alignSelf: 'center',
    width: WindowSize.windowWidth / 1.2,
    height: 70,
    position: 'absolute',
    zIndex: 3,
  },
});
export default TodoDetails;
