import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { FullWindowOverlay } from 'react-native-screens';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PageHeader = () => {
  return (
    <View style={Styles.PageHeaderContainer}>
      <Text style={Styles.TextFont}>TO DO LIST</Text>
      <Image
        style={Styles.SettingImage}
        source={require('../images/settings.png')}
       />
    </View>
  )
}

const Styles = StyleSheet.create({
  PageHeaderContainer:{
    // backgroundColor:"green",
    flexDirection:'row',
    marginTop:17,
    justifyContent: 'space-between'
  },
  SettingImage: {

    height: windowHeight / 30,
    width: windowWidth / 15,
    // backgroundColor:"blue"
  },
  TextFont:{
    color: "#F79E89",
    fontWeight: "900",
    alignSelf: 'center',
    fontSize: 20,
  }
});

export default PageHeader