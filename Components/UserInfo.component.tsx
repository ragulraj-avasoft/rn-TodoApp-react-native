import React, {useState} from 'react';
import {Dimensions, Linking, StyleSheet, Text, View} from 'react-native';
import Input from './Input.component';
import {ErrorMessage, Formik} from 'formik';
import Clickable from './Clickable.component';

interface UserInfoProps {
  navigation: any;
}
const UserInfo: React.FC<UserInfoProps> = props => {
  let [submitValidationerror, setSubmitValidationerror] = useState(false);

  const submitValidation = (values: any) => {
    console.log('submit validation');
    console.log(values);
    if (values.email !== 'robinragulraj@gmail.com') {
      setSubmitValidationerror(true);
      // setSubmitValidationerrorText('Invalid Credentials')
    } else {
      setSubmitValidationerror(false);
      if (values.password !== 'R@ava05121999') {
        setSubmitValidationerror(true);
      } else {
        console.log('pass');
        setSubmitValidationerror(false);
        props.navigation.navigate('todo');
      }
    }
  };

  return (
    <View style={Styles.UserInfoParentContainer}>
      <View style={Styles.LeftEmptyComtainer}></View>
      <View style={Styles.UserInfoChildContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          validate={values => {
            // console.log(values)
            const errors = {};
            if (!values.email) {
              errors.email = '* Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            } else if (submitValidationerror == true) {
              errors.email = "Emailid doesn't match";
            }

            let strongPassword = new RegExp(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
            );

            if (!values.password) {
              errors.password = 'Required';
            } else if (strongPassword.test(values.password) === false) {
              errors.password =
                'A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required.';
            } else if (submitValidationerror == true) {
              errors.password = "Password doesn't match with the emailId";
            }
            return errors;
          }}
          onSubmit={values => submitValidation(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={Styles.emailContainer}>
                <Input
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  color={'black'}
                />

                {errors.email && touched.email ? (
                  <Text style={Styles.ShowError}>{errors.email}</Text>
                ) : null}
              </View>
              <View style={Styles.PasswordContainer}>
                <Input
                  color="black"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {errors.password && touched.password ? (
                  <Text style={Styles.ShowError}>{errors.password}</Text>
                ) : null}
              </View>
              <View style={Styles.ForgotPasscodeContainer}>
                <Text
                  style={Styles.ForgotPasscode}
                  onPress={() => Linking.openURL('http://google.com')}>
                  Forgot Password?
                </Text>
              </View>
              <View style={Styles.PressableContainer}>
                <Clickable
                  buttonText={'SIGN IN'}
                  color={'orange'}
                  onPress={() => handleSubmit()}
                />
              </View>
              <View style={Styles.TextContainer}>
                <Text style={Styles.BlackColor}>Don't have an account?</Text>
                <Text style={{...Styles.OrangeColor, ...Styles.spaceLeft}}>
                  Sign Up
                </Text>
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={Styles.RightEmptyContainer}></View>
    </View>
  );
};
const Styles = StyleSheet.create({
  UserInfoParentContainer: {
    flex: 1,
    // backgroundColor: 'gray',
    flexDirection: 'row',
  },
  LeftEmptyComtainer: {
    // backgroundColor: "red",
    flex: 1,
  },
  UserInfoChildContainer: {
    // backgroundColor: "blue",
    // marginLeft: 25,
    // marginRight: 25,
    flex: 8,
  },
  RightEmptyContainer: {
    // backgroundColor:"blue",
    flex: 1,
  },
  emailContainer: {
    // backgroundColor:"blue",
    // flex:1.5
  },
  PasswordContainer: {
    // backgroundColor:"green",
    // flex:1
    paddingTop: 20,
  },
  ForgotPasscode: {
    color: '#272727',
  },
  ForgotPasscodeContainer: {
    // backgroundColor:"red",
    // flex:0.75,
    marginLeft: 25,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 10,
  },
  PressableContainer: {
    // backgroundColor:"blue",
    // flex:1,
    paddingTop: 10,
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // flex:1,
    paddingTop: 10,
  },
  BlackColor: {
    color: 'black',
  },
  OrangeColor: {
    color: '#F79E89',
  },
  ShowError: {
    color: 'red',
  },
  spaceLeft: {
    marginLeft: 5,
  },
});

export default UserInfo;
