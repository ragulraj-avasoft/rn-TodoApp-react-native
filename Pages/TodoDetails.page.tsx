import React, {useEffect, useState} from 'react';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import Todo from '../models/Todo.model';
import {useDispatch, useSelector} from 'react-redux';
import {createTodo, deleteTodo} from '../global-states/TodoState';
import {editTodo} from '../global-states/TodoState';
import {RootState} from '../Components/Store.component';
import DeletePopUp from '../Components/DeletePopUp.component';
import ShowPageHeader from '../Components/ShowPageHeader.component';
import CreateTodoComponent from '../Components/CreateTodo.component';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
interface TOdoDetailsProps {
  navigation: any;
  route: any;
}
const TodoDetails: React.FC<TOdoDetailsProps> = props => {
  const value = props.route.params;

  let [imageUri, setImageUri] = useState(value.currentTodo.imageUri);
  let [singleTodo, setSingleTodo] = useState<Todo>(value.currentTodo);
  let [isCloseButtonClicked, setCloseButtonClicked] = useState(false);
  let [deleteClicked, setDeleteClicked] = useState(false);

  const dispatcher = useDispatch();

  useEffect(() => {
    console.log(imageUri);
    if (value.title === 'edit' && imageUri != undefined) {
      setCloseButtonClicked(true);
    }
  }),[];

  const OverAllTodo = useSelector((state: RootState) => state.createTodo.todo);
  let id = 0;
  let TodoImageUri: string;
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

  const OnClickSaveButton = () => {
    if (singleTodo !== undefined) {
      console.log('if1');
      if (OverAllTodo.length === 0) {
        singleTodo.id = id + 1;
      } else {
        let length = OverAllTodo.length;
        let currentId = OverAllTodo[length - 1].id;
        singleTodo.id = currentId + 1;
      }
      if (imageUri !== '') {
        console.log('Create image');
        singleTodo.imageUri = imageUri;
      }
      if (singleTodo.description === undefined) {
        singleTodo.description = '';
      }
      console.log(singleTodo);
      console.log('todo sent');
      dispatcher(createTodo(singleTodo));
      props.navigation.navigate('todo');
    } else {
      console.log('details else');
    }
  };

  const onClickEditButton = () => {
    console.log(singleTodo);
    if (singleTodo !== undefined) {
      (singleTodo.id = value.currentTodo.id),
        (singleTodo.imageUri = imageUri),
        setImageUri(imageUri),
        dispatcher(editTodo(singleTodo));
      props.navigation.navigate('todo');
    } else {
    }
  };

  const onClickAttachment = (imageUri: string) => {
    console.log('attachment ccccc');
    setImageUri(imageUri);
    console.log(imageUri);
    const TodoClone = {...singleTodo};
    TodoClone.imageUri = imageUri;
    setSingleTodo(TodoClone);
    console.log(imageUri);
    if (imageUri !== '') {
      console.log('if att');

      setCloseButtonClicked(true);
    } else {
      console.log('else att');
      setCloseButtonClicked(false);
    }
  };

  const getTodo = (values: any) => {
    console.log('get todo');
    console.log(values);
    const todoItem: Todo = {
      id: 0,
      title: values.title,
      description: values.description,
      createdAt: createdDate,
      imageUri: '',
    };
    setSingleTodo(todoItem);
    console.log('single');
  };

  const onPressImageCloseButton = () => {
    setCloseButtonClicked(false);
    setImageUri('');
    onClickAttachment('');
  };

  const onClickDeleteIcon = () => {
    setDeleteClicked(true);
  };

  const closePopUp = () => {
    console.log('close');
    setDeleteClicked(false);
  };

  const onClickDeleteConfirmationButton = () => {
    console.log('Delete Todo');
    props.navigation.navigate('todo');
    dispatcher(deleteTodo(value.currentTodo));
  };

  return (
    <>
      {deleteClicked === true ? (
        <DeletePopUp
          popUp={closePopUp}
          onPressDelete={onClickDeleteConfirmationButton}
        />
      ) : null}
      <View style={Styles.TodoListParentContainer}>
        <View style={Styles.TodoListChildContainer}>
          <ShowPageHeader
            navigation={props.navigation}
            title={value.title}
            OnclickSaveButton={OnClickSaveButton}
            onClickEdit={onClickEditButton}
            onClickDelete={onClickDeleteIcon}
            onClickAttachment={onClickAttachment}
          />
          <CreateTodoComponent
            todo={getTodo}
            value={value.currentTodo}
            imageuri={imageUri}
          />
        </View>
        {isCloseButtonClicked === true && imageUri !== '' ? (
          <View style={Styles.ImageContainer}>
            <Pressable
              style={Styles.closeButtoncontainer}
              onPress={onPressImageCloseButton}>
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
