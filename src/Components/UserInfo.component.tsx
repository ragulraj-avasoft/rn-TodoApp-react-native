import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Input from './Input.component';
import {Formik} from 'formik';
import Clickable from './Clickable.component';
import {NavigationScreenProp} from 'react-navigation';
import User from '../models/User.model';
import WindowSize from '../config/Measurement';
import {useFocusEffect} from '@react-navigation/native';
import {cos} from 'react-native-reanimated';

interface UserError {
  email: string;
  password: string;
}
interface UserInfoProps {
  navigation: NavigationScreenProp<any, any>;
}
const UserInfo: React.FC<UserInfoProps> = props => {
  let [widthDecreaseValue, setWidthDecreaseValue] = useState<Animated.Value>(
    new Animated.Value(0),
  );
  let [heightDecreaseValue, setHeightDecreaseValue] = useState<Animated.Value>(
    new Animated.Value(0),
  );
  let [isSignInClicked, setSignInClicked] = useState(false);
  let [submitError, setSubmitError] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      if (isSignInClicked === false) {
        console.log('if');
        setSignInClicked(false);
        Animated.timing(widthDecreaseValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
        Animated.timing(heightDecreaseValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();

      }
    }, []),
  );
  widthDecreaseValue = useRef(new Animated.Value(0)).current;
  heightDecreaseValue = useRef(new Animated.Value(0)).current;
  const decreaseButtonWidth = () => {
    Animated.timing(heightDecreaseValue, {
      toValue: 50,
      duration: 1000,
      delay: 100,
      useNativeDriver: false,
    }).start();
    console.log('decrease triggered');
    Animated.timing(widthDecreaseValue, {
      toValue: 155,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const onSubmit = async (values: User) => {
    setTimeout(() => {
      if (
        values.email === 'robinragulraj@gmail.com' &&
        values.password === 'R@ava05121999'
      ) {
        setSubmitError(false);
        props.navigation.navigate('todo');
      } else {
        setSubmitError(true);
      }
    }, 3000);
    decreaseButtonWidth();
    setSignInClicked(true);
  };
  const emailValidation = (values:User) => {
    if (!values.email) {
      return 'null';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      return 'Incorrect Email';
    }
  };

  const passwordValidation = (values: User) => {
    let strongPassword = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );
    if (!values.password) {
      return 'null';
    } else if (strongPassword.test(values.password) === false) {
      return 'Incorrect Password';
    }
  };

  return (
    <View style={Styles.userInfoParentContainer}>
      <View style={Styles.userInfoChildContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          validate={values => {
            let errors: UserError = {};
            setSubmitError(false);

            let emailError = emailValidation(values);
            if (emailError === 'null') {
              errors.email = '* Required';
            } else if (emailError === 'Incorrect Email') {
              errors.email = 'Invalid EmailAddress';
            }

            let passwordError = passwordValidation(values);
            if (passwordError === 'null') {
              errors.password = '* Required';
            } else if (passwordError === 'Incorrect Password') {
              errors.password =
                'A minimum 8 characters of strong password are required.';
            }

            if (submitError === true) {
              (errors.email = 'Invalid Credentials'),
                (errors.password = 'Invalid Credentials');
            }
            return errors;
          }}
          onSubmit={values => onSubmit(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View>
                <Input
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  color={'#000000'}
                  style={{
                    borderWidth: 1,
                    borderRadius: 15,
                    height: WindowSize.windowHeight / 14,
                    borderColor: '#272727',
                  }}
                />

                {errors.email && touched.email ? (
                  <Text style={Styles.showError}>{errors.email}</Text>
                ) : null}
              </View>
              <View style={Styles.passwordContainer}>
                <Input
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  color={'#000000'}
                  style={{
                    borderWidth: 1,
                    borderRadius: 15,
                    height: WindowSize.windowHeight / 14,
                  }}
                />
                {errors.password && touched.password ? (
                  <Text style={Styles.showError}>{errors.password}</Text>
                ) : null}
              </View>
              <View style={Styles.forgotPasscodeContainer}>
                <Text style={Styles.forgotPasscode}>Forgot Password?</Text>
              </View>
              <Animated.View style={[Styles.buttonContainer]}>
                <Animated.View
                  style={[
                    Styles.pressableContainer,
                    {
                      paddingHorizontal: widthDecreaseValue,
                      paddingVertical:heightDecreaseValue
                    },
                  ]}>
                  <Clickable
                    buttonText={'SIGN IN'}
                    color={'#F79E89'}
                    onPress={handleSubmit}
                  />
                </Animated.View>
                {isSignInClicked === true ? (
                  <View style={Styles.spinnerContainer}>
                    <ActivityIndicator size="large" color="#F79E89" />
                  </View>
                ) : null}
              </Animated.View>

              <View style={Styles.textContainer}>
                <Text style={Styles.blackColor}>Don't have an account?</Text>
                <Text style={{...Styles.orangeColor, ...Styles.spaceLeft}}>
                  Sign Up
                </Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  userInfoParentContainer: {
    flex: 1.5,
  },

  userInfoChildContainer: {
    marginLeft: 25,
    marginRight: 25,
  },
  passwordContainer: {
    paddingTop: 20,
  },
  forgotPasscode: {
    color: '#272727',
  },
  forgotPasscodeContainer: {
    marginLeft: 25,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 10,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
  },
  blackColor: {
    color: 'black',
  },
  orangeColor: {
    color: '#F79E89',
  },
  showError: {
    color: 'red',
    lineHeight: 14,
  },
  spaceLeft: {
    marginLeft: 5,
  },
  spinner: {
    borderWidth: 5,
    borderColor: '#f3f3f3',
    borderTopColor: '#F79E89',
    borderTopWidth: 5,
    height: 30,
    width: 30,
    borderRadius: 15,
    transform: [{rotate: '360deg'}],
  },
  spinnerContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  buttonContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 90,
    position: 'relative',
  },
  pressableContainer: {
    position: 'absolute',
    width: 310,
    alignItems: 'stretch',
  },
});

export default UserInfo;
