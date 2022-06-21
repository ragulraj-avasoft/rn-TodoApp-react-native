import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import WindowSize from '../config/Measurement';


const TodoIcon = () => {
  return (
    <View style={Styles.todoIcon}>
      <Image style={Styles.todoImage} source={require('../images/Union.png')} />
    </View>
  );
};

const Styles = StyleSheet.create({
  todoIcon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoImage: {
    height: WindowSize.windowHeight / 4,
    width: WindowSize.windowWidth / 1.9,
  },
});

export default TodoIcon;
