import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import { NavigationScreenProp } from 'react-navigation';

interface TodoDetailsPageHeaderProps {
  navigation: NavigationScreenProp<any, any>;
  title: string;
  onSave: Function;
  onEdit: Function;
  showPopUp: Function;
  addImage: Function;
}

const TodoDetailsPageHeader: React.FC<TodoDetailsPageHeaderProps> = props => {
  const goBack = () => {
    console.log('back');
    props.navigation.navigate('todo');
  };

  const onSave = () => {
    props.onSave();
  };

  const onEdit = () => {
    props.onEdit();
  };

  const onDelete = () => {
    props.showPopUp();
  };

  const onClickAttachent = () => {
    console.log('pivk');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      freeStyleCropEnabled: true,
    }).then(response => {
      console.log(response.path);
      let path: string = response.path;
      console.log('path: ' + path);
      props.addImage(path);
    });
  };

  return (
    <>
      <View style={Styles.PageHeaderContainer}>
        <View style={Styles.LeftSide}>
          <Pressable onPress={goBack}>
            <Image
              style={Styles.BackButton}
              source={require('../images/chevron-left.png')}
            />
          </Pressable>
        </View>
        {props.title === 'save' ? (
          <View style={Styles.RightSide}>
            <Pressable onPress={onClickAttachent}>
              <Image
                style={Styles.MarginLeft}
                source={require('../images/attachment.png')}
              />
            </Pressable>
            <Pressable onPress={onSave}>
              <Image
                style={Styles.MarginLeft}
                source={require('../images/newSave.png')}
              />
            </Pressable>
          </View>
        ) : (
          <View style={Styles.RightSide}>
            <Pressable onPress={onClickAttachent}>
              <Image
                style={Styles.MarginLeft}
                source={require('../images/attachment.png')}
              />
            </Pressable>
            <Pressable onPress={onEdit}>
              <Image
                style={Styles.MarginLeft}
                source={require('../images/edit.png')}
              />
            </Pressable>
            <Pressable onPress={onDelete}>
              <Image
                style={Styles.MarginLeft}
                source={require('../images/delete.png')}
              />
            </Pressable>
          </View>
        )}
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  PageHeaderContainer: {
    flexDirection: 'row',
    marginTop: 17,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LeftSide: {},
  RightSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BackButton: {
    height: windowHeight / 22,
    width: windowWidth / 15,
  },
  TextFont: {
    color: '#F79E89',
    fontWeight: '900',
    alignSelf: 'center',
    fontSize: 20,
  },
  MarginLeft: {
    marginLeft: 10,
    height: 30,
    width: 30,
  },
});

export default TodoDetailsPageHeader;
