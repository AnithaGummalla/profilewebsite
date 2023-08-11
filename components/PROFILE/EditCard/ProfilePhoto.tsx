import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import EditCard from '.';
import Display from './Display';
import Sheet from '../Sheet';

const ProfilePhoto = () => {
  const [btnActive, setBtnActive] = useState('general');
  return (
    <View style={{padding: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          height: 60,
        }}>
        <Icon
          name="close-circle-outline"
          color={'blue'}
          size={30}
          style={{alignSelf: 'center'}}
        />
        <Text
          style={{
            color: 'blue',
            fontSize: 20,
            fontWeight: 500,
            alignSelf: 'center',
          }}>
          Edit card
        </Text>
        <Pressable
          style={{
            backgroundColor: '#ececec',
            width: 90,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            alignSelf: 'center',
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
            backgroundColor: btnActive === 'general' ? 'blue' : '#ececec',
            height: 40,
            width: 100,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setBtnActive('general')}>
          <Text style={{color: btnActive === 'general' ? 'white' : 'gray'}}>
            General
          </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: btnActive === 'display' ? 'blue' : '#ececec',
            height: 40,
            width: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setBtnActive('display')}>
          <Text style={{color: btnActive === 'display' ? 'white' : 'gray'}}>
            Display
          </Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: btnActive === 'links' ? 'blue' : '#ececec',
            height: 40,
            width: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setBtnActive('links')}>
          <Text style={{color: btnActive === 'links' ? 'white' : 'gray'}}>
            Links
          </Text>
        </Pressable>
      </View>
      <View>{btnActive === 'general' && <EditCard />}</View>
      <View>{btnActive === 'display' && <Display />}</View>
      <View>{btnActive === 'links' && <Sheet />}</View>
    </View>
  );
};

export default ProfilePhoto;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'gray',
  },
  btnActive: {
    backgroundColor: 'blue',
  },
});
