// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import { BlogProvider } from '@/context/BlogContext';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <BlogProvider>
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerTitle:'Blog Uygulamasi'}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </BlogProvider>
  );
}

export default App;