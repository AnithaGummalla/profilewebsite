import {View, Text, Pressable, FlatList, TextInput} from 'react-native';
import React, { useState } from 'react';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

const EditCard = () => {
    const [fields,setFields] = useState([
        {title: 'Card name', placeholder: 'work,'},
        {title: 'Personal details', placeholder: 'John ryan'},
        {title: 'Company details', placeholder: 'Company name'},
        {placeholder: 'Designation'},
        {placeholder: 'Department'},
        {placeholder: 'Bio'},
    ])
  return (
    <View style={{padding: 10}}>
      {/* <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Icon name="close-circle-outline" color={'blue'} size={30} />
        <Text style={{color: 'blue', fontSize: 20, fontWeight: 500}}>
          Edit card
        </Text>
        <Pressable
          style={{
            backgroundColor: '#ececec',
            width: 70,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'blue'}}>Save</Text>
        </Pressable>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <Pressable
          style={{
            backgroundColor: 'blue',
            height: 40,
            width: 100,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>General</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#ececec',
            height: 40,
            width: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'gray'}}>Display</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: '#ececec',
            height: 40,
            width: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'gray'}}>Links</Text>
        </Pressable>
      </View> */}
      <View>
          <FlatList data={fields} 
            renderItem={({item}) => (
                <View>
                    <Text style={{color: 'black', fontWeight: 500, margin: 20}}>{item.title}</Text>
                    <TextInput placeholder={item.placeholder} 
                    style={{borderWidth: 1, borderColor: '#ececec', borderRadius: 20}} />
                </View>
            )}
          />
      </View>
    </View>
  );
};

export default EditCard;
