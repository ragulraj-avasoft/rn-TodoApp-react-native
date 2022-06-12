import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IconButton, Portal, shadow} from 'react-native-paper';
const windowHeight = Dimensions.get('window').height;

interface BottomSheetProps {
  show: any;
  onDismiss: any;
  children: any;
}
const BottomSheet: React.FC<BottomSheetProps> = props => {
  const deviceWidth = Dimensions.get('window').width;
  const actualWidth = (deviceWidth - 60) / 2;
  let [open, setOpen] = useState(props.show);
  const [bottonSheetHeight, setBottomSheetHeight] = useState<number>(
    Dimensions.get('window').height - 60,
  );
  const bottom = useRef(new Animated.Value(-bottonSheetHeight)).current;
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setBottomSheetHeight(Dimensions.get('window').height - 60);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setBottomSheetHeight(Dimensions.get('window').height - 60);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (props.show) {
      setOpen(props.show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottonSheetHeight,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [props.show]);
  return (
    <Portal>
      <Animated.View
        style={[
          Styles.root,
          {
            height: Dimensions.get('window').height - 60,
            bottom: bottom,
            shadowOffset: {
              height: -3,
              width: 0,
            },
          },
          Styles.common,
        ]}>
        <View style={[Styles.header, Styles.common]}></View>
        <View
          style={{
            width: 70,
            position: 'absolute',
            top: 8,
            left: actualWidth,
            zIndex: 10,
            height: 6,
            borderRadius: 6,
            backgroundColor: '#fff',
          }}
        />
        {/* <Text style={Styles.closeButton}>X</Text> */}
        <Pressable
          style={Styles.Pressable}
          onPress={() => {
            props.onDismiss();
          }}>
          <Image
            style={Styles.closeIcon}
            source={require('../images/redButton.png')}
          />
        </Pressable>

        {/* <IconButton color="red" icon="close" style={Styles.closeIcon} onPress={props.onDismiss}/> */}
        {/* <IconButton
              color="red"
              icon="close"
              style={Styles.closeIcon}
              onPress={props.onDismiss}
            /> */}
        <ScrollView
          style={{
            height: bottonSheetHeight,
          }}>
          {props.children}
        </ScrollView>
      </Animated.View>
    </Portal>
  );
};

const Styles = StyleSheet.create({
  closeButton: {},
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#F79E89',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
    maxHeight: windowHeight - 60,
    // flex:1
  },
  header: {
    height: 40,
    // backgroundColor: '#F79E89',
    backgroundColor: '#F79E89',
  },
  common: {
    shadowColor: '#000',
    shadowOffset: {
      height: -3,
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
  // shadow: {
  //   shadowOffset: {
  //     height: -3,
  //     width: 0,
  //   },
  // },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 5,
    zIndex: 10,
    height: 30,
    width: 30,
  },
  Pressable: {
    position: 'absolute',
    right: 8,
    // top: 5,
    zIndex: 10,
    height: 30,
    width: 30,
  },
});
export default BottomSheet;
