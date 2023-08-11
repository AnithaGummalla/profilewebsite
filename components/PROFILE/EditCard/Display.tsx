import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  SectionList,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Display = () => {
  const [colors, setColors] = useState([
    '#3700DC',
    '#92CAFF',
    '#EEFF00',
    '#00FA00',
    '#F910EB',
    '#8D0077',
  ]);

  const handleCamera = () => {
    Alert.alert('camera open');
  };
  return (
    <View style={{gap: 40, marginTop: 40, backgroundColor: 'white'}}>
      {/* PROFILE PHOTO */}
      <View style={{gap: 15}}>
        <Text style={{color: 'black', fontWeight: 500, fontSize: 20}}>
          Profile photo
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/62/9d/97/629d97682a2ab2b96fdebebf434279f7.jpg',
            }}
            style={{height: 80, width: 80, borderRadius: 10}}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#ececec',
              width: 150,
              borderRadius: 30,
              height: 50,
              justifyContent: 'space-around',
              alignSelf: 'center',
            }}>
            <Feather name="edit-3" size={20} color={'blue'} />
            <Text style={{color: 'black'}}>Change photo</Text>
          </View>
        </View>
      </View>
      {/* CARD COLOR */}
      <View style={{gap: 15}}>
        <Text style={{color: 'black', fontWeight: 500, fontSize: 20}}>
          Card color
        </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: '#7B88FF',
              width: 50,
              height: 50,
              borderRadius: 30,
              justifyContent: 'center',
            }}>
            <Feather name="plus" style={{alignSelf: 'center'}} size={25} />
          </View>
          <FlatList
            horizontal={true}
            data={colors}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: item,
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  margin: 10,
                }}></View>
            )}
          />
        </View>
      </View>
      {/* LOGO */}
      <View>
        <Text style={{color: 'black', fontWeight: 500, fontSize: 20}}>
          Profile photo
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'skyblue',
              height: 80,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../IMAGES/files.png')}
              style={{height: 50, width: 50, borderRadius: 10}}
            />
          </View>
          <Pressable
            onPress={() => Alert.alert('open camera')}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#ececec',
              width: 150,
              borderRadius: 30,
              height: 50,
              justifyContent: 'space-around',
              alignSelf: 'center',
            }}>
            <Feather name="edit-3" size={20} color={'blue'} />
            <Text style={{color: 'black'}}>Change photo</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Display;
