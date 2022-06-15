import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import TodoIcon from '../Components/TodoIcon.component';
import UserInfo from '../Components/UserInfo.component';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = props => {
  return (
    <ScrollView>
      <View style={Styles.Container}>
        <TodoIcon />
        <UserInfo navigation={props.navigation} />
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  Container: {
    width: windowWidth,
    minHeight: windowHeight + 150,
  },
});
export default Login;
