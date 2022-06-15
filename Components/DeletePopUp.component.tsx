import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Clickable from './Clickable.component';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

interface DeletePopUpProps {
  popUp: Function;
  onPressDelete: Function;
}

const DeletePopUp: React.FC<DeletePopUpProps> = props => {
  const onClickDelete = () => {
    console.log('delete pop');
    props.onPressDelete();
  };
  const closeDeletePopup = () => {
    props.popUp();
  };
  return (
    <View style={Styles.DeleteParentContainer}>
      <View style={Styles.DeleteChildCntainer}>
        <Pressable onPress={() => closeDeletePopup()}>
          <Image
            style={Styles.CloseButton}
            source={require('../images/closeButton.png')}
          />
        </Pressable>
        <Text style={Styles.Confirmationtext}>
          Are you sure want to delete this todo?
        </Text>

        <View style={Styles.ButtonContainer}>
          <View style={Styles.cancelButton}>
            <Clickable
              buttonText={'cancel'}
              color={'orange'}
              onPress={closeDeletePopup}
            />
          </View>
          <View style={Styles.DeleteButton}>
            <Clickable
              buttonText={'Delete'}
              color={'orange'}
              onPress={onClickDelete}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  DeleteParentContainer: {
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 50,
    position: 'absolute',
  },
  DeleteChildCntainer: {
    height: windowHeight / 3.5,
    width: windowWidth / 1.4,
    backgroundColor: '#fff',
    zIndex: 2,
  },
  Confirmationtext: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 25,
    paddingLeft: 10,
  },
  ButtonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 40,
  },
  DeleteButton: {
    width: windowWidth / 4,
    marginRight: 10,
  },
  cancelButton: {
    width: windowWidth / 4,
    marginLeft: 10,
  },
  CloseButton: {
    marginTop: 5,
    marginRight: 5,
    width: 25,
    height: 25,
    alignSelf: 'flex-end',
  },
});
export default DeletePopUp;
