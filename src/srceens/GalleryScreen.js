import { StyleSheet, Text, View , Button } from 'react-native'
import React from 'react'

const GalleryScreen = ({navigation}) => {
  return (
    <View>
      <Text>GalleryScreen</Text>
        <Button title='Home' onPress={()=> navigation.navigate("Home")}/>
        <Button title='About' onPress={()=> navigation.navigate('About')}/>
    </View>
  )
}

export default GalleryScreen;

const styles = StyleSheet.create({

})