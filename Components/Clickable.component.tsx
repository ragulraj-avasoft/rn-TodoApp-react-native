import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
const windowHeight = Dimensions.get('window').height;

interface ClickableProps {
  buttonText: string;
  color: string;
  onPress: Function;
}
const Clickable: React.FC<ClickableProps> = props => {
  return (
    <>
      {props.color === 'orange' ? (
        <Pressable style={Styles.Button}
        onPress ={() => props.onPress()}
        >
          <Text style={Styles.ButtonText}>{props.buttonText}</Text>
        </Pressable>
      ) : (
        <Pressable 
        style={{...Styles.Button, ...Styles.orangeColor}}
        >
          <Text style={{...Styles.ButtonTextColor,...Styles.ButtonText}}>{props.buttonText}</Text>
        </Pressable>
      )}
    </>
  );
};

const Styles = StyleSheet.create({
  ButtonText: {
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: '#F79E89',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: windowHeight / 13,
  },
  whiteColor: {
    backgroundColor: '#FFFFFF',
    color: '#F79E89',
  },
  orangeColor: {
    backgroundColor: '#FFFFFF',
    color: 'white',
  },
  ButtonTextColor:{
    color:"#F79E89",
  }
});

export default Clickable;
