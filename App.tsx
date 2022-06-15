import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './Pages/Login.page';
import TodoList from './Pages/TodoList.page';
import TodoDetails from './Pages/TodoDetails.page';
import {Provider} from 'react-redux';
import {Store} from './Components/Store.component';
import DeleteConfirmation from './Pages/DeleteConfirmation.page';

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
          <Stack.Screen
            name="delete"
            component={DeleteConfirmation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
