import React from 'react';
import {Dimensions, StyleSheet, TextInput} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface InputProps {
  placeholder: string;
  onChangeText: Function;
  onBlur: Function;
  color: string;
}
const Input: React.FC<InputProps> = props => {
  return (
    <>
      {props.color === 'black' ? (
        <TextInput
          style={{...Styles.TextInput,...Styles.BlackBackgroundColor}}
          placeholder={props.placeholder}
          placeholderTextColor={'rgba(0,0,0,0.3)'}
          onChangeText={text => {
            props.onChangeText(text);
          }}
          onBlur={e => props.onBlur(e)}
        />
      ) : (
        <TextInput
        style={{...Styles.TextInput,...Styles.WhiteBackgroundColor}}
          placeholder={props.placeholder}
          placeholderTextColor={'white'}
          onChangeText={text => {
            props.onChangeText(text);
          }}
          onBlur={e => props.onBlur(e)}
        />
      )}
    </>
  );
};

const Styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderRadius: 15,
    height: windowHeight / 14,
    color: 'black',
    fontWeight: '700',
  },
  BlackBackgroundColor:{
    borderColor: '#272727',
  },
  WhiteBackgroundColor:{
    borderColor: '#fff',
    borderWidth: 2,
    color:"#fff"
  }
});

export default Input;
