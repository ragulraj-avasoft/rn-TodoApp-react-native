import React from 'react';
import {Dimensions, Image, Pressable, StyleSheet, Text} from 'react-native';
const windowHeight = Dimensions.get('window').height;

interface PickerProps {
  text: string;
}
const Picker: React.FC<PickerProps> = props => {
  return (
    <>
      {props.text === 'Add Image (Optional)' ? (
        <Pressable style={Styles.Picker}>
          <Text style={Styles.Text}>{props.text}</Text>
          <Image
            style={Styles.ImageIcon}
            source={require('../images/image.png')}
          />
        </Pressable>
      ) : (
        <Pressable style={Styles.Picker}>
          <Text style={Styles.Text}>{props.text}</Text>
          <Image
            style={Styles.ImageIcon}
            source={require('../images/calendar.png')}
          />
        </Pressable>
      )}
    </>
  );
};

const Styles = StyleSheet.create({
  Picker: {
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    height: windowHeight / 14,
  },
  Text: {
    marginLeft: 15,
  },
  ImageIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    right: 10,
    height: 30,
    width: 30,
  },
});
export default Picker;
