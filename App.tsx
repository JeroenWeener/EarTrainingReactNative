import * as React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Level from './src/pages/level/Level'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LevelScreen"
          component={Level}
          options={{ title: 'Level screen' }}
        />
        <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AnotherScreen = () => {
  return <Text>This is another screen</Text>
};