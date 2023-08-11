import {View, Text, Pressable, TextInput, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import Fontawesome from 'react-native-vector-icons/FontAwesome';

const Contacts = ({navigation}) => {
  const [contactsCards, setContactsCards] = useState([
    {
      image:
        'https://th.bing.com/th/id/R.e9ea02d7da4ff2b839a42f4cffeb2805?rik=xWxGh4U9BsLTzw&riu=http%3a%2f%2fclipart-library.com%2fimg%2f2061698.jpg&ehk=1VzuE7S%2fnUnaou9l0gOQLm17MnSHDRNAbR70PqS5BZc%3d&risl=&pid=ImgRaw&r=0',
      head: 'All contacts',
      text: '35 contacts',
      icon: 'angle-right',
    },
    {
      image:
        'https://th.bing.com/th/id/R.e9ea02d7da4ff2b839a42f4cffeb2805?rik=xWxGh4U9BsLTzw&riu=http%3a%2f%2fclipart-library.com%2fimg%2f2061698.jpg&ehk=1VzuE7S%2fnUnaou9l0gOQLm17MnSHDRNAbR70PqS5BZc%3d&risl=&pid=ImgRaw&r=0',
      head: 'Recently added',
      text: '30 contacts',
      icon: 'angle-right',
    },
    {
      image:
        'https://th.bing.com/th/id/R.e9ea02d7da4ff2b839a42f4cffeb2805?rik=xWxGh4U9BsLTzw&riu=http%3a%2f%2fclipart-library.com%2fimg%2f2061698.jpg&ehk=1VzuE7S%2fnUnaou9l0gOQLm17MnSHDRNAbR70PqS5BZc%3d&risl=&pid=ImgRaw&r=0',
      head: 'Live contacts',
      text: '40 contacts',
      icon: 'angle-right',
    },
    {
      image:
        'https://th.bing.com/th/id/R.135bf331c2e5d2ab23258d1fbb26193c?rik=2RPTdxGwWA%2bv9g&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhite-circle-png-transparent%2fwhite-circle-png-transparent-5.png&ehk=gMrnT%2b01w9DLTDfbot%2fqvn4uLzTyvvETRlChZeafS0I%3d&risl=&pid=ImgRaw&r=0',
      head: 'Scanned',
      text: '0 contacts',
      icon: 'angle-right',
    },
  ]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        gap: 10,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 40, fontWeight: '500', color: 'blue'}}>
          Contacts
        </Text>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderColor: 'blue',
            borderWidth: 1,
            alignSelf: 'center',
            borderRadius: 50,
            height: 30,
            width: 130,
            backgroundColor: '#ececec',
          }}>
          <Fontawesome
            name="plus"
            size={20}
            color={'blue'}
            style={{color: 'blue', alignSelf: 'center'}}
          />
          <Text style={{color: 'blue', alignSelf: 'center'}}>Create group</Text>
        </Pressable>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 25,
            backgroundColor: '#ececec',
            width: 300,
          }}>
          <Fontawesome
            name="search"
            size={20}
            color={'blue'}
            style={{alignSelf: 'center', margin: 20}}
          />
          <TextInput
            placeholder="Search job,name..."
            style={{alignSelf: 'center', fontSize: 15}}
          />
        </View>
        <View style={{backgroundColor: '#ececec', borderRadius: 30}}>
          <Fontawesome
            name="search"
            size={20}
            color={'blue'}
            style={{alignSelf: 'center', margin: 20}}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={contactsCards}
          renderItem={({item}) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderWidth: 1,
                borderRadius: 30,
                borderColor: 'blue',
                width: '100%',
                marginBottom: 10,
                marginTop: 10,
                height: 90,
                alignSelf: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.image}}
                style={{height: 50, width: 50, borderRadius: 50}}
              />
              <Pressable onPress={() => navigation.navigate('scannedList')}>
                <Text style={{color: 'blue'}}>{item.head}</Text>
                <Text style={{color: 'blue'}}>{item.text}</Text>
              </Pressable>
              <Fontawesome name={item.icon} size={40} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Contacts;
