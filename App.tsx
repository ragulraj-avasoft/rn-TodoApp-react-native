import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './src/Pages/LoginScreen.page';
import TodoList from './src/Pages/TodoListScreen.page';
import TodoDetails from './src/Pages/TodoDetailsScreen.page';
import {Provider} from 'react-redux';
import Store from './src/Store';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={Store}>
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
    </Provider>
  );
};

export default App;
