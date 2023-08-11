import {View, Text, FlatList, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import Fontawesome from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {key: 1, icon: 'phone', name: 'Numbers', color: 'blue'},
  {key: 2, icon: 'link', name: 'Links', color: 'blue'},
  {
    key: 3,
    icon: 'linkedin',
    name: 'Accounts',
    color: 'white',
    backgroundColor: 'blue',
  },
  {key: 4, icon: 'instagram', name: 'Account', color: '#ff1493'},
  {key: 5, icon: 'twitter', name: 'Account', color: '#1e90ff'},
  {
    key: 6,
    icon: 'facebook',
    name: 'Accounts',
    color: 'blue',
  },
  {key: 7, icon: 'youtube', name: 'Account', color: 'red'},
  {key: 8, icon: 'github', name: 'Account', color: 'black'},
  {key: 9, icon: 'globe', name: 'Account', color: '#ff69b4'},
  {
    key: 10,
    icon: 'behance',
    name: 'Account',
    color: 'white',
    backgroundColor: 'blue',
  },
  {key: 11, icon: 'spotify', name: 'Account', color: '#32cd32'},
  {key: 12, icon: 'twitch', name: 'Account', color: '#8a2be2'},
];

const numOfCols = 4;
const EditLinks = () => {
  const [links, setLinks] = useState('');
  const renderItem = ({item}) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          width: 100,
          height: 100,
          margin: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Fontawesome
          name={item.icon}
          size={40}
          color={item.color}
          style={{
            backgroundColor: item.backgroundColor,
            borderRadius: item.borderRadius,
          }}
        />
        <Text style={{fontSize: 10, color: 'blue'}}>{item.name}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <View style={{height: 50}}>
        <FlatList
          data={DATA}
          numColumns={3}
          renderItem={({item}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'aliceblue',
              }}>
              <Pressable
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  width: 100,
                  height: 100,
                  margin: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => Alert.alert('phone')}>
                <Fontawesome
                  name={item.icon}
                  size={40}
                  color={item.color}
                  style={{
                    backgroundColor: item.backgroundColor,
                    borderRadius: item.borderRadius,
                  }}
                />
                <Text style={{fontSize: 10, color: 'blue'}}>{item.name}</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default EditLinks;
