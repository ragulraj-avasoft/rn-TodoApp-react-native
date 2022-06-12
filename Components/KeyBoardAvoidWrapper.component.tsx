import React from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

interface KeyBoardAvoidWrapperProps{
    children: any;
}
const KeyBoardAvoidWrapper: React.FC<KeyBoardAvoidWrapperProps>  = (props) => {
  return (
    <KeyboardAvoidingView>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {
                    props.children
                }

            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default KeyBoardAvoidWrapper