import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Clickable from './Clickable.component';
import WindowSize from '../config/Measurement';

interface DeletePopUpProps {
  popUp: Function;
  onDelete: Function;
}

const DeletePopUp: React.FC<DeletePopUpProps> = props => {
  const onDelete = () => {
    props.onDelete();
  };
  const closePopup = () => {
    props.popUp();
  };
  return (
    <View style={Styles.deleteParentContainer}>
      <View style={Styles.deleteChildCntainer}>
        <Pressable onPress={() => closePopup()}>
          <Image
            style={Styles.closeButton}
            source={require('../images/closeButton.png')}
          />
        </Pressable>
        <Text style={Styles.confirmationText}>
          Are you sure want to delete this todo?
        </Text>

        <View style={Styles.buttonContainer}>
          <View style={Styles.cancelButton}>
            <Clickable
              buttonText={'cancel'}
              color={'#F79E89'}
              onPress={closePopup}
            />
          </View>
          <View style={Styles.deleteButton}>
            <Clickable
              buttonText={'Delete'}
              color={'#F79E89'}
              onPress={onDelete}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  deleteParentContainer: {
    height: WindowSize.windowHeight,
    width: WindowSize.windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 50,
    position: 'absolute',
  },
  deleteChildCntainer: {
    height: WindowSize.windowHeight / 3.5,
    width: WindowSize.windowWidth / 1.4,
    backgroundColor: '#fff',
    zIndex: 2,
  },
  confirmationText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 25,
    paddingLeft: 10,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 40,
  },
  deleteButton: {
    width: WindowSize.windowWidth / 4,
    marginRight: 10,
  },
  cancelButton: {
    width: WindowSize.windowWidth / 4,
    marginLeft: 10,
  },
  closeButton: {
    marginTop: 5,
    marginRight: 5,
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
  },
});
export default DeletePopUp;
