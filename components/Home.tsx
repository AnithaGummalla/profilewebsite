import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const [contactOptions, setContactOptions] = useState(false);

  const handleOptions = () => {
    setContactOptions(true);
  };
  return (
    <View>
      {contactOptions ? (
        <View
          style={{
            padding: 20,
            backgroundColor: 'white',
            height: 200,
            marginTop: 500,
            borderTopRightRadius: 30,
            alignItems: 'center',
            borderTopLeftRadius: 30,
            gap: 20,
          }}>
          <View
            style={{
              width: 70,
              height: 10,
              backgroundColor: '#ececec',
              borderRadius: 20,
            }}></View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <View
              style={{
                alignItems: 'center',
                gap: 10,
                backgroundColor: '#ececec',
                height: 100,
                width: 100,
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Icon name="logo-rss" size={20} color={'blue'} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Write to NFC
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                gap: 10,
                backgroundColor: '#ececec',
                height: 100,
                width: 100,
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <FontAwesome name="clone" size={20} color={'blue'} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Duplicate
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                gap: 10,
                backgroundColor: '#ececec',
                height: 100,
                width: 100,
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <FontAwesome name="trash" size={20} color={'red'} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>Delete</Text>
            </View>
          </View>
        </View>
      ) : (
        <View>
          {/* FLEXEND USER */}
          <View style={styles.user}>
            <Text style={{alignSelf: 'center'}}>Hey, John</Text>
            <Image
              source={{
                uri: 'https://i.pinimg.com/originals/62/9d/97/629d97682a2ab2b96fdebebf434279f7.jpg',
              }}
              style={styles.image}
            />
          </View>
          {/* CONTACTS */}
          <View style={styles.contact}>
            <View style={styles.contactEach}>
              <View style={styles.nameSection}>
                <View>
                  <Image
                    source={{
                      uri: 'https://i.pinimg.com/originals/62/9d/97/629d97682a2ab2b96fdebebf434279f7.jpg',
                    }}
                    style={styles.image}
                  />
                </View>
                <View>
                  <Text style={styles.contactName}>John ryan</Text>
                  <Text style={{color: 'skyblue'}}>Personal card</Text>
                </View>
                <Pressable
                  style={styles.horizantalIcon}
                  onPress={handleOptions}>
                  <Feather name="more-horizontal" style={styles.icon} />
                </Pressable>
              </View>
              <View style={styles.pressableBnts}>
                <Pressable
                  style={styles.pressable}
                  onPress={() => navigation.navigate('edit')}>
                  <Feather name="edit-3" style={styles.icon} />
                  <Text style={styles.text}>Edit</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                  <Entypo name="documents" style={styles.icon} />
                  <Text style={styles.text}>Preview card</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                  <Feather name="send" style={styles.icon} />
                  <Text style={styles.text}>Share</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.contactEach}>
              <View style={styles.nameSection}>
                <View>
                  <Image
                    source={{
                      uri: 'https://i.pinimg.com/originals/62/9d/97/629d97682a2ab2b96fdebebf434279f7.jpg',
                    }}
                    style={styles.image}
                  />
                </View>
                <View>
                  <Text style={styles.contactName}>John ryan</Text>
                  <Text style={{color: 'skyblue'}}>Personal card</Text>
                </View>
                <View style={styles.horizantalIcon}>
                  <Feather name="more-horizontal" style={styles.icon} />
                </View>
              </View>
              <View style={styles.pressableBnts}>
                <Pressable
                  style={styles.pressable}
                  onPress={() => navigation.navigate(edit)}>
                  <Feather name="edit-3" style={styles.icon} />
                  <Text style={styles.text}>Edit</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                  <Entypo name="documents" style={styles.icon} />
                  <Text style={styles.text}>Preview card</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                  <Feather name="send" style={styles.icon} />
                  <Text style={styles.text}>Share</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.contactEach}>
              <View style={styles.nameSection}>
                <View>
                  <Image
                    source={{
                      uri: 'https://i.pinimg.com/originals/62/9d/97/629d97682a2ab2b96fdebebf434279f7.jpg',
                    }}
                    style={styles.image}
                  />
                </View>
                <View>
                  <Text style={styles.contactName}>John ryan</Text>
                  <Text style={{color: 'skyblue'}}>Personal card</Text>
                </View>
                <View style={styles.horizantalIcon}>
                  <Feather name="more-horizontal" style={styles.icon} />
                </View>
              </View>
              <View style={styles.pressableBnts}>
                <Pressable style={styles.pressable}>
                  <Feather name="edit-3" style={styles.icon} />
                  <Text style={styles.text}>Edit</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                  <Entypo name="documents" style={styles.icon} />
                  <Text style={styles.text}>Preview card</Text>
                </Pressable>
                <Pressable style={styles.pressable}>
                  <Feather name="send" style={styles.icon} />
                  <Text style={styles.text}>Share</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {color: 'blue'},
  icon: {alignSelf: 'center', color: 'blue', fontSize: 20},
  pressable: {display: 'flex', flexDirection: 'row', gap: 10},
  pressableBnts: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 300,
    padding: 20,
    gap: 15,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizantalIcon: {
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 10,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contact: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  contactName: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 25,
  },
  image: {height: 50, width: 50, borderRadius: 50},
  contactEach: {
    display: 'flex',
    borderWidth: 1,
    borderColor: 'skyblue',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 350,
    backgroundColor: '#ececec',
    borderRadius: 25,
  },
  nameSection: {
    display: 'flex',
    flexDirection: 'row',
    width: 350,
    padding: 20,
    gap: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 20,
  },
});
