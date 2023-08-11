import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const PhoneNumbers = () => {
  return (
    <View>
      <View>
        <View>
          <Text>Mobile</Text>
          <Icon name="close-circle-outline" color={'blue'} size={30} />
        </View>
      </View>
    </View>
  );
};

export default PhoneNumbers;
