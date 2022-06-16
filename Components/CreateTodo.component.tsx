import {Formik} from 'formik';
import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
const windowHeight = Dimensions.get('window').height;

interface CreateTodoProps {
  todo: Function;
  value: any;
  imageuri: string;
}

const CreateTodoComponent: React.FC<CreateTodoProps> = props => {
  return (
    <View style={Styles.TodoListChildContainer}>
      <Formik
        initialValues={{
          title: props.value.title,
          description: props.value.description,
        }}
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = '* Title field is mandatory';
          } else {
            props.todo(values);
          }
          return errors;
        }}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, values, errors, touched}) => (
          <>
            <View>
              <TextInput
                style={Styles.Input}
                placeholder="Title"
                placeholderTextColor={'rgba(0,0,0,0.3)'}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />

              {errors.title && touched.title ? (
                <Text style={Styles.ShowError}>{errors.title}</Text>
              ) : null}
            </View>
            <View >
              <TextInput
                style={Styles.MultilineTextInput}
                numberOfLines={5}
                placeholder="Description"
                placeholderTextColor={'rgba(0,0,0,0.3)'}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                multiline
                value={values.description}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const Styles = StyleSheet.create({
  TodoListChildContainer: {
    marginRight: 25,
  },
  Input: {
    height: windowHeight / 10,
    color: '#272727',
    fontFamily: 'BebasNeue-Regular',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 26,
  },
  MultilineTextInput: {
    textAlignVertical: 'top',
    color: 'black',
    fontFamily: 'Montserrat-ExtraLight',
    lineHeight: 16,
    fontSize: 18,
  },
  ShowError: {
    color: 'red',
  },
  Calendar: {
    marginTop: 15,
  },
  ImagePicker: {
    marginTop: 15,
  },
  SubmitButton: {
    marginTop: 15,
  },
});
export default CreateTodoComponent;
