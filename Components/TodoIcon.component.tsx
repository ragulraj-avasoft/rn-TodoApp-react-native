import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TodoIcon = () => {
  return (
    <View style={Styles.TodoIcon}>
      <Image style={Styles.TodoImage} source={require('../images/Union.png')} />
    </View>
  );
};

const Styles = StyleSheet.create({
  TodoIcon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TodoImage: {
    height: windowHeight / 4,
    width: windowWidth / 1.9,
  },
});

export default TodoIcon;
