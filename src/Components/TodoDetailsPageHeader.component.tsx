import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import WindowSize from '../config/Measurement';
import ImagePicker from 'react-native-image-crop-picker';
import {NavigationScreenProp} from 'react-navigation';
import Icon from './Icon.component';

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
      <View style={Styles.pageHeaderContainer}>
        <View >
          <Icon
            onPress={goBack}
            height={WindowSize.windowHeight / 22}
            width={WindowSize.windowWidth / 15}
            iconName="back"
          />
        </View>
        {props.title === 'save' ? (
          <View style={Styles.rightSide}>
            <Icon
              onPress={onClickAttachent}
              height={30}
              width={30}
              marginRight={10}
              iconName="attachment"
            />
            <Icon onPress={onSave} height={30} width={30} iconName="save" />
          </View>
        ) : (
          <View style={Styles.rightSide}>
            <Icon
              onPress={onClickAttachent}
              height={30}
              width={30}
              marginRight={10}
              iconName="attachment"
            />
            <Icon
              onPress={onEdit}
              height={30}
              width={30}
              marginRight={10}
              iconName="edit"
            />
            <Icon onPress={onDelete} height={30} width={30} iconName="Delete" />
          </View>
        )}
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  pageHeaderContainer: {
    flexDirection: 'row',
    marginTop: 17,
    justifyContent: 'space-between',
  },
  rightSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});

export default TodoDetailsPageHeader;
