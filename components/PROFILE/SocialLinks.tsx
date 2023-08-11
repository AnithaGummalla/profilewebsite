import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const SocialLinks = () => {
  const [links, setLinks] = useState([
    {title: 'Personal Details'},
    {email: '+12548564783', mail: '(for work only)'},
    {mobile: '+6428628744', number: '(whatsApp only)'},
  ]);

  return (
    <View style={{backgroundColor: 'white', display:'flex', gap: 10}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          marginTop: 30,
          fontSize: 20,
        }}>
        Contact & Social links
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#ececec',
          borderRadius: 30,
          gap: 30,
          justifyContent: 'space-between',
          paddingBottom: 20
        }}>
        <View style={{alignSelf: 'center'}}>
          <FontAwesomeIcon name="phone" size={30} color={'blue'} />
        </View>
        <FlatList
          data={links}
          renderItem={({item}) => (
            <View style={{display: 'flex', gap: -10}}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18, color: 'blue'}}>{item.email}</Text>
                <Text style={{fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
                  {item.mail}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 18, color: 'blue'}}>{item.mobile}</Text>
                <Text style={{fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
                  {item.number}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          borderRadius: 30,
          backgroundColor: '#ececec',
        }}>
        <FontAwesomeIcon name="link" size={50} color={'blue'} />
        <Text
          style={{
            alignSelf: 'center',
            margin: 10,
            fontSize: 20,
            color: 'blue',
          }}>
          (product web)
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          borderRadius: 30,
          backgroundColor: '#ececec',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <FontAwesomeIcon name="linkedin" size={40} color={'blue'} />
          <Text
            style={{
              alignSelf: 'center',
              margin: 10,
              fontSize: 20,
              color: 'blue',
            }}>
            virat@018
          </Text>
        </View>
        <Text
          style={{
            alignSelf: 'center',
            margin: 10,
            fontSize: 20,
            color: 'blue',
          }}>
          (Product page)
        </Text>
      </View>
    </View>
  );
};

export default SocialLinks;
