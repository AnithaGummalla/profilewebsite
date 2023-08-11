import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import PersonalDetails from './PersonalDetails';
import CompanyDetails from './CompanyDetails';
import SocialLinks from './SocialLinks';

const Profile = () => {
  const [personalDetails, setPersonalDetails] = useState({
    title: 'Personal Details',
    data: [
      {Email: 'Email Address', mail: 'info@viratkohli.foundation'},
      {mobile: 'Mobile Number', number: '+91-7064582309'},
    ],
  });
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {/* IMAGE VIEW FIXED */}
      <View>
        <Image
          source={require('../../IMAGES/king_kohli.jpg')}
          style={{height: 400, width: 400}}
        />
      </View>

      {/* PROFILE */}
      <ScrollView style={{padding: 30}}>
        {/* NAME SECTION FIXED */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 40, color: 'black'}}>
            Virat Kohli
          </Text>
          <Text
            style={{
              backgroundColor: '#ececec',
              borderRadius: 50,
              width: 70,
              height: 70,
            }}></Text>
        </View>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}
        />

        {/* ABOUT FIXED */}
        <View style={{marginTop: 20, display: 'flex', gap: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 23, color: 'black'}}>
            About
          </Text>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 30,
              marginBottom: 30,
              fontStyle: 'normal',
              color: 'black',
            }}>
            Virat Kohli is an Indian international cricketer and the former
            captain of the Indian national cricket team who plays as a
            right-handed batsman for Royal Challengers Bangalore in the IPL and
            for Delhi in Indian domestic cricket. Widely regarded as one of the
            greatest batsmen of all time
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}
        />
        {/* PERSONAL DETAILS */}
        <PersonalDetails />
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}
        />
        {/* COMPANY DETAILS */}
        <CompanyDetails />
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}
        />
        {/* contact Links */}
        <SocialLinks />

        <Pressable
          style={{
            backgroundColor: '#0000cd',
            padding: 30,
            borderRadius: 20,
            marginTop: 40,
          }}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
            Share Contact
          </Text>
        </Pressable>
      </ScrollView>
    </ScrollView>
  );
};

export default Profile;
