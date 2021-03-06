import React, {useState} from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import Main from './src/screens/Main';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import DayForecast from './src/screens/DayForecast';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: 'rgb(47, 99,147)'},
        headerTitleStyle: {color: 'white'},
        headerTitleStyle: {fontSize: 30, fontWeight: '400'},
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: 'white'}}>
        <Stack.Screen name="Main" component={Main}  options={{title: ""}}/>
        <Stack.Screen name="DayForecast" component={DayForecast} options={{title: ""}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
}
});
