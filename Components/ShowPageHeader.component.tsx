import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface ShowPageHeaderProps {
  navigation: any;
  title: string;
  OnclickSaveButton: Function;
}

const ShowPageHeader: React.FC<ShowPageHeaderProps> = props => {
  const OnclickBackButton = () => {
    console.log('back');
    props.navigation.navigate('todo');
  };
  const OnclickSaveButton = () => {
    // console.log('back');
    props.OnclickSaveButton()

    // props.navigation.navigate('todo');
  };
  return (
    <View style={Styles.PageHeaderContainer}>
      <View style={Styles.LeftSide}>
        <Pressable onPress={OnclickBackButton}>
          <Image
            style={Styles.BackButton}
            source={require('../images/chevron-left.png')}
          />
        </Pressable>
      </View>
      {props.title === 'save' ? (
        <View style={Styles.RightSide}>
          <Pressable>
            <Image
              style={{...Styles.MarginLeft,...Styles.backgroundColour}}
              source={require('../images/image.png')}
            />
          </Pressable>
          <Pressable onPress={OnclickSaveButton}>
            <Image
              style={Styles.MarginLeft}
              source={require('../images/save.png')}
            />
          </Pressable>
        </View>
      ) : (
        <View style={Styles.RightSide}>
          <Image
            style={Styles.MarginLeft}
            source={require('../images/clock.png')}
          />
          <Image
            style={Styles.MarginLeft}
            source={require('../images/edit.png')}
          />
          <Image
            style={Styles.MarginLeft}
            source={require('../images/delete.png')}
          />
        </View>
      )}

      {/* <View style={Styles.RightSide}>
        <Image
          style={Styles.MarginLeft}
          source={require('../images/clock.png')}
        />
        <Image
          style={Styles.MarginLeft}
          source={require('../images/edit.png')}
        />
        <Image
          style={Styles.MarginLeft}
          source={require('../images/delete.png')}
        />
      </View> */}
      {/* <View style={Styles.RightSide}>
        <Pressable >
          <Image
            style={Styles.MarginLeft}
            source={require('../images/image.png')}
          />
        </Pressable>
        <Pressable>
          <Image
            style={Styles.MarginLeft}
            source={require('../images/save.png')}
          />
        </Pressable>
      </View> */}
    </View>
  );
};

const Styles = StyleSheet.create({
  PageHeaderContainer: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    marginTop: 17,
    justifyContent: 'space-between',
  },
  LeftSide: {},
  RightSide: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BackButton: {
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
    // backgroundColor: 'black',
  },
  backgroundColour:{
    backgroundColor:'black',
  }
});

export default ShowPageHeader;
