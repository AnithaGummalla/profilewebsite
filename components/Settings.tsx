import {View, Text, Pressable, ScrollView, FlatList} from 'react-native';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import Modalcomponent from './PROFILE/ModalComponent';

const Tab = createBottomTabNavigator();

const Settings = ({ navigation }) => {
  const [settings,setSettings] = useState(['profile', 'share app', 'rate us', 'about app', 'contact us', 'privacy policy'])
  const [modal,setModal] = useState(false)

  const handleModal = () => {
    setModal(true)
  }

  return (
    <ScrollView
      style={{
        display: 'flex',
        margin: 10,
        backgroundColor: 'white',
      }}>
                {/* card */}
                <View
          style={{
            borderColor: 'blue',
            height: 120,
            borderWidth: 3,
            borderRadius: 20,
            width: 300,
            backgroundColor: '#c5c5c5',
          }}></View>
        <FlatList data={settings} 
        renderItem={({item}) => (
            <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ececec', margin: 10, borderRadius: 20}}>
              <View>
              <Text
            style={{
              padding: 20,
              fontSize: 18,
              color: 'blue',
              borderRadius: 20,
              textAlign: 'center',
              width: '100%',
            }}>{item}</Text>
              </View>
              <View style={{marginRight: 20, alignSelf: 'center'}}>
              <Fontawesome name='angle-right' size={40} color={'blue'} />
              </View>
            </View>
            
        )} />
      <View>
        <Pressable onPress={() => {
          navigation.navigate('modal', {name: 'modal'})
        }}>
          <Text style={{color: 'red', padding: 20}}>Logout?</Text>
        </Pressable>
      </View>
      {/* TAB NAVIGATION */}
    </ScrollView>
  );
};

export default Settings;
