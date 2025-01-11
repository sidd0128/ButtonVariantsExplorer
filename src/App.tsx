import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import 'react-native-get-random-values';
import ButtonVariantsScreen from './screens/ButtonVariantsScreen';
import { enableScreens } from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ButtonVariants" component={ButtonVariantsScreen} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default App;
