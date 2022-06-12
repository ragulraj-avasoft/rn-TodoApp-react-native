import React from 'react'
import { Dimensions, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoIcon from '../Components/TodoIcon.component';
import UserInfo from '../Components/UserInfo.component';
import KeyBoardAvoidWrapper from '../Components/KeyBoardAvoidWrapper.component';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = (props) => {
  return (
      <ScrollView  >
        <StatusBar hidden={true} />
        <View style={Styles.Container}>
          <TodoIcon />
          <UserInfo navigation={props.navigation}  />
        </View>
      </ScrollView>
  )
}

const Styles = StyleSheet.create({
  Container: {
        // height: windowHeight,
        width: windowWidth,
        // minWidth: '20%',
        // maxWidth: 500,
        minHeight: windowHeight+150,
        // maxHeight: windowHeight + 40 ,
        
  },
  ScrollView:{
    // flex:1
  },
  SafeAreaView:{
    // flex:1
    // paddingTop: Constants.statusBarHeight,
  },
  contentContainer:{
    paddingVertical: 40,
  }
});
export default Login