import React from 'react';
import {TextInput, ViewStyle} from 'react-native';
interface InputProps {
  placeholder: string;
  onChangeText: Function;
  onBlur: Function;
  color?: string;
  placeholderTextColor?: string;
  value?: any;
  fontSize?: number;
  lineHeight?: number;
  style?: ViewStyle;
  fontFamily?: string;
  type?: string;
  numberOfLines?: number;
  textAlignVertical?: string;
  inputTextType?:string;
  fontWeight?:
    | 'bold'
    | 'normal'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}
const Input: React.FC<InputProps> = props => {
  return (
    <>
      {
        <TextInput
          style={[
            props.style,
            {
              fontWeight: props.fontWeight,
              color: props.color,
              fontSize: props.fontSize,
              lineHeight: props.lineHeight,
              fontFamily: props.fontFamily,
            },
          ]}
          placeholder={props.placeholder}
          placeholderTextColor={'rgba(0,0,0,0.3)'}
          onChangeText={text => {
            props.onChangeText(text);
          }}
          onBlur={e => props.onBlur(e)}
          value={props.value}
          numberOfLines ={props.numberOfLines}
          multiline
        />
      }
    </>
  );
};

export default Input;
