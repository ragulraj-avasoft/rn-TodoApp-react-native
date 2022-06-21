import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text} from 'react-native';
import WindowSize from '../config/Measurement';
interface ClickableProps {
  buttonText: string;
  color: string;
  onPress: Function;
}
const Clickable: React.FC<ClickableProps> = props => {
  return (
    <>
      {
        <Pressable
          style={[Styles.button, {backgroundColor: props.color}]}
          onPress={() => props.onPress()}>
          <Text style={Styles.buttonText}>{props.buttonText}</Text>
        </Pressable>
      }
    </>
  );
};

const Styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: WindowSize.windowHeight / 13,
  },
  whiteColor: {
    backgroundColor: '#FFFFFF',
    color: '#F79E89',
  },
  orangeColor: {
    backgroundColor: '#FFFFFF',
    color: 'white',
  },
});

export default Clickable;
