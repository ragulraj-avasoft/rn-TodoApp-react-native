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

interface ShowPageHeaderProps {
  navigation: any;
  title: string;
  OnclickSaveButton: Function;
  onClickEdit: Function;
  onClickDelete: Function;
  onClickAttachment: Function;
}

const ShowPageHeader: React.FC<ShowPageHeaderProps> = props => {
  const OnclickBackButton = () => {
    console.log('back');
    props.navigation.navigate('todo');
  };

  const OnclickSaveButton = () => {
    props.OnclickSaveButton();
  };

  const onClickEditButton = () => {
    props.onClickEdit();
  };

  const onClickDeleteIcon = () => {
    props.onClickDelete();
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
      props.onClickAttachment(path);
    });
  };

  return (
    <>
      <View style={Styles.PageHeaderContainer}>
        <View style={Styles.LeftSide}>
          <Pressable onPress={OnclickBackButton}>
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
            <Pressable onPress={OnclickSaveButton}>
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
            <Pressable onPress={onClickEditButton}>
              <Image
                style={Styles.MarginLeft}
                source={require('../images/edit.png')}
              />
            </Pressable>
            <Pressable onPress={onClickDeleteIcon}>
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

export default ShowPageHeader;
