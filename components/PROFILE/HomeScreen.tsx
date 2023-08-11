import {View, Text, Image, TextInput, Pressable, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('userData').then(val => {
        if (val != null) {
          let user = JSON.parse(val);
          setName(user.Name);
          setAge(user.Age);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert('please enter your data');
    } else {
      try {
        var user = {
          Name: name,
        };
        await AsyncStorage.mergeItem('userData', JSON.stringify(user));
        Alert.alert('Successful!, your data has been updated');
      } catch (error) {
        console.log(error);
      }
    }
  };
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      navigation.navigate('localStorage', {name: 'localStorage'});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          gap: 20,
        }}>
        <Text style={{alignSelf: 'center'}}>Hey, {name}</Text>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/62/9d/97/629d97682a2ab2b96fdebebf434279f7.jpg',
          }}
          style={{height: 70, width: 70, borderRadius: 50}}
        />
      </View>
      {/* <View>
        {contacts.length === 0 && (
        <Text>Nothing in your card list!</Text>
        )}
      </View> */}
      <View style={{alignItems: 'center', gap: 20, marginTop: 100}}>
        <Text style={{fontWeight: 500, color: 'black', fontSize: 50}}>
          Name: {name}
        </Text>
        <Text style={{fontWeight: 300, color: 'black', fontSize: 30}}>Age: {age}</Text>
        <TextInput
          placeholder="name"
          value={name}
          onChangeText={newVal => setName(newVal)}
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
          onPress={updateData}>
          <Text>UPDATE</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: 'green',
            width: 90,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            borderRadius: 25,
          }}
          onPress={removeData}>
          <Text>remove</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;
