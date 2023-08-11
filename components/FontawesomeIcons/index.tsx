import { View, Text } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import Material from 'react-native-vector-icons/MaterialIcons'

const FontAwesomeIcons = () => {
  return (
    <View>
      <Text>FontAwesomeIcons</Text>
      <Fontawesome name='facebook' size={30} />
      <Fontawesome name='instagram' size={30} />
      <Fontawesome name='github' size={30} />
      <Fontawesome name='youtube' size={30} />
      <Fontawesome name='link' size={30} />
      <Fontawesome name='twitch' size={30} />
      <Fontawesome name='phone' size={30} />
      <Fontawesome name='spotify' size={30} />
      <Fontawesome name='behance' size={30} />
      <Fontawesome name='globe' size={30} />
      <Fontawesome name='linkedin' size={30} />
      <Fontawesome name='twitter' size={30} />


      <EvilIcons name='phone' size={30}  />
      <EvilIcons name='check' size={30}  />
      <EvilIcons name='gear' size={30}  />
    </View>
  )
}

export default FontAwesomeIcons