import {Formik} from 'formik';
import React from 'react';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Clickable from '../Components/Clickable.component';
import Input from '../Components/Input.component';
import Picker from '../Components/Picker.component';
import KeyBoardAvoidWrapper from '../Components/KeyBoardAvoidWrapper.component';
const windowHeight = Dimensions.get('window').height;

const CreateTodo = () => {
  return (
    <KeyBoardAvoidWrapper>
      <View style={Styles.TodoListChildContainer}>
        <Formik
          initialValues={{Title: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={Styles.InputContainer}>
                <Input
                  placeholder="Title"
                  onChangeText={handleChange('Title')}
                  onBlur={handleBlur('Title')}
                  color="white"
                />
                {errors.Title && touched.Title ? (
                  <Text style={Styles.ShowError}>{errors.Title}</Text>
                ) : null}
              </View>
              <View style={Styles.MultiLineInputContainer}>
                <TextInput
                  style={Styles.MultilineTextInput}
                  numberOfLines={5}
                  placeholder="Description"
                  multiline
                />
              </View>
              <View style={Styles.Calendar}>
                <Picker text={'Deadline (Optional)'} />
              </View>
              <View style={Styles.ImagePicker}>
                <Picker text={'Add Image (Optional)'} />
              </View>
              <View style={Styles.SubmitButton}>
                <Clickable
                  buttonText={'ADD TODO'}
                  color={'white'}
                  onPress={() => handleSubmit()}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </KeyBoardAvoidWrapper>
  );
};

const Styles = StyleSheet.create({
  TodoListChildContainer: {
    marginLeft: 25,
    marginRight: 25,
    flex: 1,
  },
  InputContainer: {
    // flex:1,
  },
  MultiLineInputContainer: {
    // flex:1,
    marginTop: 15,
  },

  ShowError: {
    color: 'red',
  },
  MultilineTextInput: {
    textAlignVertical: 'top',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    height: windowHeight / 2.2,
    // marginTop: 15,
  },
  Calendar: {
    marginTop: 15,
    // flex:1,
  },
  ImagePicker: {
    marginTop: 15,
    // flex:1,
  },
  SubmitButton: {
    marginTop: 15,
    // flex:1,
  },
});
export default CreateTodo;
