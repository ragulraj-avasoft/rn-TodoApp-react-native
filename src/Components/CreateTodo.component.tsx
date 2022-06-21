import {Formik} from 'formik';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Input from './Input.component';
import WindowSize from '../config/Measurement';

interface TodoDetails {
  title: string;
  description: string;
}
interface CreateTodoProps {
  todo: Function;
  value: TodoDetails;
  imageuri: string;
}

const CreateTodoComponent: React.FC<CreateTodoProps> = props => {
  return (
    <View style={Styles.todoListChildContainer}>
      <Formik
        initialValues={{
          title: props.value.title,
          description: props.value.description,
        }}
        validate={values => {
          const errors: TodoDetails = {
            title: '',
            description: '',
          };
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
              <Input
                color="#272727"
                placeholder="Title"
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                style={{height: WindowSize.windowHeight / 10}}
                fontFamily="BebasNeue-Regular"
                fontWeight="bold"
                fontSize={24}
                lineHeight={26}
              />

              {errors.title && touched.title ? (
                <Text style={Styles.showError}>{errors.title}</Text>
              ) : null}
            </View>
            <View >
              <Input
                color="#272727"
                placeholder="Description"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                fontFamily="Montserrat-ExtraLight"
                fontSize={18}
                lineHeight={16}
                textAlignVertical="top"
                numberOfLines={5}
                inputTextType ="multiline"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const Styles = StyleSheet.create({
  todoListChildContainer: {
    marginRight: 25,
  },
  showError: {
    color: 'red',
  },
  MultilineTextInput: {
    textAlignVertical: 'top',
    color: 'black',
    fontFamily: 'Montserrat-ExtraLight',
    lineHeight: 16,
    fontSize: 18,
  },
});
export default CreateTodoComponent;
