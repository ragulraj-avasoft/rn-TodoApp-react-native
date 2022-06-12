import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './Pages/Login.page';
import TodoList from './Pages/TodoList.page';
import TodoDetails from './Pages/TodoDetails.page';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="todo"
          component={TodoList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="todoDetails"
          component={TodoDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
