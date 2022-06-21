import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import WindowSize from '../config/Measurement';


const TodoList = () => {
  return (
    <View style={Styles.pageHeaderContainer}>
      <Text style={Styles.textFont}>TO DO LIST</Text>
      <View>
        <Image
          style={Styles.settingImage}
          source={require('../images/settings.png')}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  pageHeaderContainer: {
    flexDirection: 'row',
    marginTop: 17,
    justifyContent: 'space-between',
  },
  settingImage: {
    height: WindowSize.windowHeight / 30,
    width: WindowSize.windowWidth / 15,
  },
  textFont: {
    color: '#F79E89',
    fontWeight: '900',
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default TodoList;
