import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';


const Modalcomponent = ({navigation}) => {
  return (
    <View style={styles.component}>
      <View style={styles.modal}>
        <Text style={styles.logout}>Are you sure want to logout?</Text>
        <Text style={styles.warning}>
          You will need to again enter your details to login
        </Text>
        <TouchableOpacity
          style={styles.yesBtn}
          onPress={() => {
            navigation.navigate('welcome');
          }}>
          <Text style={styles.yesText}>Yes, I want to</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.noBtn}
          onPress={() => navigation.navigate('settings')}>
          <Text style={styles.noText}>No, I don't want to</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Modalcomponent;

const styles = StyleSheet.create({
  yesBtn: {
    backgroundColor: 'blue',
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  yesText: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  noBtn: {
    borderColor: 'blue',
    borderWidth: 2,
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  noText: {color: 'blue', fontSize: 20, fontWeight: 'bold'},
  logout: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 20,
    alignSelf: 'center',
  },
  warning: {alignSelf: 'center', color: 'blue'},
  modal: {
    backgroundColor: 'white',
    top: '60%',
    padding: 20,
    paddingBottom: 70,
    gap: 15,
  },
  component: {backgroundColor: 'gray', flex: 1},
});
