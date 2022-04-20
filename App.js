import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HodinyPage from './pages/HodinyPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HodinyPage}
          options={{ title: 'Welcome' }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});