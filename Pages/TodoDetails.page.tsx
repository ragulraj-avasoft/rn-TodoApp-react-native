import React, {useEffect, useState} from 'react';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import Todo from '../models/Todo.model';
import {useDispatch, useSelector} from 'react-redux';
import {createTodo, deleteTodo} from '../global-states/TodoState';
import {editTodo} from '../global-states/TodoState';
import {RootState} from '../Components/Store.component';
import DeletePopUp from '../Components/DeletePopUp.component';
import TodoDetailsPageHeader from '../Components/TodoDetailsPageHeader.component';
import CreateTodoComponent from '../Components/CreateTodo.component';
import {NavigationScreenProp} from 'react-navigation';
import AlterTodo from '../TodoSchema';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface TOdoDetailsProps {
  navigation: NavigationScreenProp<any, any>;
  route: any;
}
const TodoDetails: React.FC<TOdoDetailsProps> = props => {
  const value = props.route.params;
  const OverAllTodo = useSelector((state: RootState) => state.Todo.todo);
  let [imageUri, setImageUri] = useState(value.currentTodo.imageUri);
  let [singleTodo, setSingleTodo] = useState<Todo>(value.currentTodo);
  let [isCloseButtonClicked, setCloseButtonClicked] = useState(false);
  let [deleteClicked, setDeleteClicked] = useState(false);

  const dispatcher = useDispatch();
  useEffect(() => {
    if (value.title === 'edit' && imageUri != undefined) {
      setCloseButtonClicked(true);
    }
  }, []);

  let id = 0;
  var day = new Date().getDate().toString();
  var year = new Date().getFullYear().toString();
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
  const date = new Date();
  let monthName = months[date.getMonth()];
  var createdDate = day + ' ' + monthName + ' ' + year;

  const onSave = async () => {
    // if (singleTodo !== undefined) {
    //   if (singleTodo.description === undefined) {
    //     singleTodo.description = '';
    //   }
    //   await AlterTodo.createTodo(singleTodo);
    //   props.navigation.navigate('todo');
    // }
    if (singleTodo !== undefined) {
      if (OverAllTodo.length === 0) {
        singleTodo.id = id + 1;
      } else {
        let length = OverAllTodo.length;
        let currentId = OverAllTodo[length - 1].id;
        singleTodo.id = currentId + 1;
      }
      if (singleTodo.description === undefined) {
        singleTodo.description = '';
      }
      singleTodo.imageUri = imageUri;
      dispatcher(createTodo(singleTodo));
      props.navigation.navigate('todo');
    }
  };

  const onEdit = () => {
    if (singleTodo !== undefined) {
      singleTodo.id = value.currentTodo.id;
      singleTodo.imageUri = imageUri;
      setImageUri(imageUri);
      dispatcher(editTodo(singleTodo));
      props.navigation.navigate('todo');
    }
  };

  const onDelete = () => {
    props.navigation.navigate('todo');
    dispatcher(deleteTodo(value.currentTodo));
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
      createdAt: createdDate,
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
      <View style={Styles.TodoListParentContainer}>
        <View style={Styles.TodoListChildContainer}>
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
          <View style={Styles.ImageContainer}>
            <Pressable style={Styles.closeButtoncontainer} onPress={onClose}>
              <Image
                style={Styles.CloseButton}
                source={require('../images/closeButton.png')}
              />
            </Pressable>
            <Image style={Styles.ImageSize} source={{uri: imageUri}} />
          </View>
        ) : null}
        {value.title === 'edit' ? (
          <View style={Styles.CreatedAtDateContainer}>
            <Text style={Styles.CreatedAtDate}>
              Created at {value.currentTodo.createdAt}
            </Text>
          </View>
        ) : null}
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  TodoListParentContainer: {
    height: windowHeight,
    width: windowWidth,
    zIndex: 0,
  },
  TodoListChildContainer: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  CreatedAtDateContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  CreatedAtDate: {
    color: '#272727',
    fontFamily: 'Montserrat-ExtraLight',
  },
  ImageContainer: {
    position: 'relative',
    marginTop: 10,
    zIndex: 1,
    height: windowHeight / 1.8,
    width: windowWidth / 1,
  },
  ImageSize: {
    height: windowHeight / 2,
    width: windowWidth / 1.2,
    alignSelf: 'center',
    zIndex: 2,
  },
  CloseButton: {
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
    width: windowWidth / 1.2,
    height: 70,
    position: 'absolute',
    zIndex: 3,
  },
});
export default TodoDetails;
