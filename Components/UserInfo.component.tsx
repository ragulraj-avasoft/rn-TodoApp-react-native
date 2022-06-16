import React, { useState } from 'react';
import { Linking, StyleSheet, Text, View} from 'react-native';
import Input from './Input.component';
import { Formik} from 'formik';
import Clickable from './Clickable.component';
import { NavigationScreenProp } from 'react-navigation';

interface UserInfoProps {
  navigation: NavigationScreenProp<any, any>;
}
const UserInfo: React.FC<UserInfoProps> = props => {
  let[submitError, setSubmitError] = useState(false)

  const onSubmit = (values: any) => {
    if(values.email ==="robinragulraj@gmail.com" && values.password === "R@ava05121999")
    {
      setSubmitError(false)
      props.navigation.navigate('todo');
    }
    else
    {
      setSubmitError(true)
    }
  };

  return (
    <View style={Styles.UserInfoParentContainer}>
      <View style={Styles.LeftEmptyComtainer}></View>
      <View style={Styles.UserInfoChildContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          validate={values => {
            console.log(values)
            setSubmitError(false)
            const errors = {};
            if (!values.email) {
              errors.email = '* Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            else if(submitError === true)
            {
              console.log("submiterror")
              errors.email = "Invalid Credentials ";
            }

            let strongPassword = new RegExp(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
            );

            if (!values.password) {
              errors.password = 'Required';
            } else if (strongPassword.test(values.password) === false) {
              errors.password =
                'A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required.';
            }     
            else if(submitError === true)
            {
              errors.password = "Invalid Credentials ";
            }  
            return errors;
          }}
          onSubmit={values =>onSubmit(values)}>
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
    flex: 1.5,
    flexDirection: 'row',
  },
  LeftEmptyComtainer: {
    flex: 1,
  },
  UserInfoChildContainer: {
    flex: 8,
  },
  RightEmptyContainer: {
    flex: 1,
  },
  emailContainer: {},
  PasswordContainer: {
    paddingTop: 20,
  },
  ForgotPasscode: {
    color: '#272727',
  },
  ForgotPasscodeContainer: {
    marginLeft: 25,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingTop: 10,
  },
  PressableContainer: {
    paddingTop: 10,
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
