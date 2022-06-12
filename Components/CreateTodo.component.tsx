import {Formik} from 'formik';
import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import Clickable from './Clickable.component';
import Input from './Input.component';
import Picker from './Picker.component';
const windowHeight = Dimensions.get('window').height;

interface ShowPageHeaderProps {
  todo: Function;
}

const CreateTodoComponent: React.FC<ShowPageHeaderProps> = (props) => {
  return (
    <View style={Styles.TodoListChildContainer}>
      <Formik
        initialValues={{title: '', description: ''}}
        validate={values => {
          // console.log(values);
          const errors = {};
          if (!values.title) {
            console.log('Title empty');
            errors.title = '* Title field is mandatory';
          }
          else {
            props.todo(values)
          }
          return errors;
        }}
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
              <TextInput
                style={Styles.Input}
                placeholder="Title"
                placeholderTextColor={'rgba(0,0,0,0.3)'}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
              />

              {errors.title ? (
                <Text style={Styles.ShowError}>{errors.title}</Text>
              ) : null}
            </View>
            <View style={Styles.MultiLineInputContainer}>
              <TextInput
                style={Styles.MultilineTextInput}
                numberOfLines={5}
                placeholder="Description"
                placeholderTextColor={'rgba(0,0,0,0.3)'}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                multiline
              />
            </View>
            {/* <View style={Styles.Calendar}>
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
            </View> */}
          </>
        )}
      </Formik>
    </View>
  );
};

const Styles = StyleSheet.create({
  TodoListChildContainer: {
    marginLeft: 25,
    marginRight: 25,
    // flex: 1,
  },
  InputContainer: {
    // backgroundColor:'black',
    // marginTop:50,
  },
  Input: {
    // borderWidth: 1,
    borderRadius: 15,
    height: windowHeight / 10,
    color: 'black',
    fontWeight: '700',
    // backgroundColor: 'blue'
  },
  MultiLineInputContainer: {},
  MultilineTextInput: {
    textAlignVertical: 'top',
    // borderColor: 'red',
    // borderWidth: 2,
    borderRadius: 15,
    fontWeight: '700',
    color: 'black',

    // height: windowHeight / 2.2,
    // marginTop: 15,
  },

  ShowError: {
    color: 'red',
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
export default CreateTodoComponent;
