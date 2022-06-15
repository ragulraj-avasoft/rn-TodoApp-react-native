import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Setting from './setting.component';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PageHeader = () => {
  return (
    <View style={Styles.PageHeaderContainer}>
      <Text style={Styles.TextFont}>TO DO LIST</Text>
      <View>
        <Image
          style={Styles.SettingImage}
          source={require('../images/settings.png')}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  PageHeaderContainer: {
    flexDirection: 'row',
    marginTop: 17,
    justifyContent: 'space-between',
  },
  SettingImage: {
    height: windowHeight / 30,
    width: windowWidth / 15,
  },
  TextFont: {
    color: '#F79E89',
    fontWeight: '900',
    alignSelf: 'center',
    fontSize: 20,
  },
  MarginLeft: {
    marginLeft: 10,
    height: 30,
    width: 30,
  },
});

export default PageHeader;
