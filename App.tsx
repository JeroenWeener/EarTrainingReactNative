import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LevelPage from './src/pages/level/LevelPage'
import HomePage from './src/pages/level/HomePage'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Home page' }}
        />
        <Stack.Screen
          name="LevelPage"
          component={LevelPage}
          options={{ title: 'Level page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}