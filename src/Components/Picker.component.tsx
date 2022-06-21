import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import WindowSize from '../config/Measurement';

interface PickerProps {
  text: string;
}
const Picker: React.FC<PickerProps> = props => {
  return (
    <>
      {props.text === 'Add Image (Optional)' ? (
        <Pressable style={Styles.picker}>
          <Text style={Styles.text}>{props.text}</Text>
          <Image
            style={Styles.imageIcon}
            source={require('../images/image.png')}
          />
        </Pressable>
      ) : (
        <Pressable style={Styles.picker}>
          <Text style={Styles.text}>{props.text}</Text>
          <Image
            style={Styles.imageIcon}
            source={require('../images/calendar.png')}
          />
        </Pressable>
      )}
    </>
  );
};

const Styles = StyleSheet.create({
  picker: {
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    height: WindowSize.windowHeight / 14,
  },
  text: {
    marginLeft: 15,
  },
  imageIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    right: 10,
    height: 30,
    width: 30,
  },
});
export default Picker;
