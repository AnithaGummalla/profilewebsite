import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import WelcomeSignup from './WelcomeSignup';
import Modalcomponent from './ModalComponent';

const WelcomeScreen = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'blue', height: 350}}>
      <Text
          style={{
            color: 'white',
            fontSize: 25,
            textAlign: 'center',
            fontWeight: '400',
            padding: 10
          }}>
          Let's make your first digital business card
        </Text>
        <View style={{width: 300, backgroundColor: 'white', height: 300, left: '10%'}}>
        <View style={{position: 'absolute', top: '-10%'}}>
          <Image
              source={require('../../IMAGES/king_kohli.jpg')}
              style={{height: 80, width: 80, borderRadius: 50}}
            />
        </View>
        <View style={{top: '23%', gap: 10}}>
        <Text
              style={{
                marginLeft: 40,
                backgroundColor: '#4169e1',
                padding: 10,
                borderRadius: 20,
              }}>
              Anitha
            </Text>
            <Text
              style={{
                backgroundColor: '#add8e6',
                padding: 10,
                borderRadius: 20,
              }}>
              software engineer
            </Text>
            <Text
              style={{
                backgroundColor: '#add8e6',
                padding: 20,
                borderRadius: 30,
                width: 220,
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, quaerat?
            </Text>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;
