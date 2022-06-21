import React, { useState } from 'react';
import TodoIcon from '../Components/TodoIcon.component';
import UserInfo from '../Components/UserInfo.component';
import {ScrollView, StyleSheet, View} from 'react-native';
import WindowSize from '../config/Measurement';

interface LoginProps {
  navigation: any;
}
const Login: React.FC<LoginProps> = props => {

  return (
    <ScrollView>
      <View style={Styles.container}>
        <TodoIcon />
        <UserInfo navigation={props.navigation} />
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: WindowSize.windowWidth,
    height: WindowSize.windowHeight,
  },

});
export default Login;
