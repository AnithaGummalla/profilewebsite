import {View, Text, FlatList, SectionList} from 'react-native';
import React, {useState} from 'react';

const PersonalDetails = () => {
  const [d, setD] = useState([
    {title: 'Personal Details'},
    {email: 'Email Address:', mail: 'info@viratkohli.foundation'},
    {mobile: 'Mobile Number:', number: '+91-7064582309'},
  ]);
  return (
    <View style={{marginTop: 30}}>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          marginTop: 10,
          fontSize: 20,
        }}>
        Personal Details
      </Text>
      <FlatList
        data={d}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'white', gap: -12}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, color: 'black'}}>{item.email}</Text>
              <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
                {item.mail}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18}}>{item.mobile}</Text>
              <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
                {item.number}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PersonalDetails;
