import {
  View,
  Text,
  TextInput,
  FlatList,
  SectionList,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Fontawesome from 'react-native-vector-icons/FontAwesome';

const ContactsList = () => {
  const [list, setList] = useState([
    {
      title: 'A',
      data: [
        {
          image:
            'https://th.bing.com/th/id/OIP.ZnZRESFYS1ehZ_vsWykr3AHaHU?pid=ImgDet&rs=1',
          name: 'ani',
          designation: 'co-founder at visio',
          button: 'View',
        },
        {
          image:
            'https://th.bing.com/th/id/OIP.ZnZRESFYS1ehZ_vsWykr3AHaHU?pid=ImgDet&rs=1',
          name: 'anil',
          designation: 'marketing head at visio',
          button: 'View',
        },
      ],
    },
    {
      title: 'B',
      data: [
        {
          image:
            'https://th.bing.com/th/id/OIP.ZnZRESFYS1ehZ_vsWykr3AHaHU?pid=ImgDet&rs=1',
          name: 'Basha',
          designation: 'co-founder at visio',
          button: 'View',
        },
        {
          image:
            'https://th.bing.com/th/id/OIP.ZnZRESFYS1ehZ_vsWykr3AHaHU?pid=ImgDet&rs=1',
          name: 'Bell',
          designation: 'marketing head at visio',
          button: 'View',
        },
      ],
    },
    {
      title: 'G',
      data: [
        {
          image:
            'https://th.bing.com/th/id/OIP.ZnZRESFYS1ehZ_vsWykr3AHaHU?pid=ImgDet&rs=1',
          name: 'Gagan',
          designation: 'co-founder at visio',
          button: 'View',
        },
        {
          image:
            'https://th.bing.com/th/id/OIP.ZnZRESFYS1ehZ_vsWykr3AHaHU?pid=ImgDet&rs=1',
          name: 'Ganesh',
          designation: 'marketing head at visio',
          button: 'View',
        },
      ],
    },
    {
      title: 'V',
      data: [
        {
          image:
            'https://th.bing.com/th/id/OIP.ZnZRESFYS1ehZ_vsWykr3AHaHU?pid=ImgDet&rs=1',
          name: 'Vicky',
          designation: 'co-founder at visio',
          button: 'View',
        },
        {
          image:
            'https://th.bing.com/th/id/OIP.ZnZRESFYS1ehZ_vsWykr3AHaHU?pid=ImgDet&rs=1',
          name: 'Vinith',
          designation: 'marketing head at visio',
          button: 'View',
        },
      ],
    },
  ]);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <SectionList
          sections={list}
          renderItem={({item}) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 10,
                gap: 20,
                backgroundColor: 'skyblue',
                borderRadius: 30,
                width: 350,
              }}>
              <View style={{marginLeft: 10}}>
                <Image
                  source={{uri: item.image}}
                  style={{height: 50, width: 50, borderRadius: 50}}
                />
              </View>
              <View style={{alignSelf: 'center', width: 150}}>
                <Text>{item.name}</Text>
                <Text>{item.designation}</Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'blue',
                  backgroundColor: 'white',
                  borderRadius: 30,
                  width: 80,
                  height: 30,
                  marginLeft: 10,
                  alignSelf: 'center',
                }}>
                <Pressable
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{alignSelf: 'center'}}>{item.button}</Text>
                </Pressable>
              </View>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <View   style={{
                backgroundColor: 'skyblue',
                borderRadius: 50,
                width: 40,
                height: 40,
              }}>
            <Text style={{alignSelf: 'center', justifyContent: 'center', alignItems: 'center'}}>
              {title}
            </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ContactsList;
