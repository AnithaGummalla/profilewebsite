import {View, Text, Pressable, Image, TextInput, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorage = ({navigation}) => {
  const [name,setName] = useState('')
  const [age,setAge] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const setData = async() => {
    if(name.length == 0 || age.length == 0){
      Alert.alert('please enter name')
    }else {
      try {
        var user = {
          Name: name,
          Age: age,
        }
        await AsyncStorage.setItem('userData', JSON.stringify(user))
        navigation.navigate('home')
      } catch (error) {
        console.log(error)
      }
    }
  }

  const getData = () => {
    try {
      AsyncStorage.getItem('userData').then(val => {
        if(val != null){
          navigation.navigate('home')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={{gap: 20, alignItems: 'center', marginTop: 10}}>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Image
        source={{
          uri: 'https://www.bacancytechnology.com/blog/wp-content/uploads/2020/04/Async-Storage-Class.png',
        }}
        style={{height: 200, width: 280}}
      />
      <TextInput
        placeholder="name"
        onChangeText={newVal => setName(newVal)}
        style={{borderWidth: 1, backgroundColor: 'white', width: 250}}
      />
      <TextInput
        placeholder="age"
        onChangeText={newVal => setAge(newVal)}
        style={{borderWidth: 1, backgroundColor: 'white', width: 250}}
      />
      <Pressable
        style={{
          backgroundColor: 'green',
          width: 90,
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          borderRadius: 25,
        }}
        onPress={setData}>
        <Text>ADD</Text>
      </Pressable>
    </View>
  );
};

export default LocalStorage;
