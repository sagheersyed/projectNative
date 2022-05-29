import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/srceens/HomeScreen'
import AboutScreen from './src/srceens/AboutScreen'
import GalleryScreen from './src/srceens/GalleryScreen'

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Gallery'>
        <Stack.Screen name='Home' component={HomeScreen} options={{}}/>
        <Stack.Screen name='About' component={AboutScreen} />
        <Stack.Screen name='Gallery' component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'green'
  },
  index: {
    backgroundColor: "black",
    color: 'white',
    width: 140,
    // height : 100,
    textAlign: 'center',
    padding: 20,
    borderRadius: 20,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'white',
    borderWidth: 2
  }
})