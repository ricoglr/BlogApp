// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import { Provider } from '@/context/BlogContext';
const Stack = createNativeStackNavigator();
import Entypo from '@expo/vector-icons/Entypo';
import EditScreen from './screens/EditScreen';
import ShowScreen from './screens/ShowScreen';
import Feather from '@expo/vector-icons/Feather';

function App() {
  return (
    <Provider>
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerTitle:'Blog Uygulamasi'}}>
        <Stack.Screen name="Home" component={HomeScreen} options={({navigation})=>({
          headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('CreateScreen')}>
              <Entypo name="plus" size={24} color="black" />
            </TouchableOpacity>
          )
        })}/>
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="Show" component={ShowScreen}  options={({navigation})=>({
          headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Edit')}>
              <Feather name="edit" size={24} color="black" />
            </TouchableOpacity>
          )
        })}/>
        <Stack.Screen name="Edit" component={EditScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;