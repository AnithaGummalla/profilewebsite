import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import TextInputIcon from 'react-native-paper/lib/typescript/src/components/TextInput/Adornment/TextInputIcon';
import Fontawesome from 'react-native-vector-icons/FontAwesome';
import materialIcon from 'react-native-vector-icons/MaterialIcons';
import {Checkbox} from 'react-native-paper';

const SignUp = ({navigation}) => {
  const [text, setText] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [fields, setFields] = useState([
    {name: 'Name', placeholder: 'name'},
    {name: 'Email Address', placeholder: 'email address'},
    {name: 'Password', placeholder: 'password'},
    {name: 'Confirm Password', placeholder: 'confirm password'},
  ]);

  return (
    <View style={{flex: 1, gap: 10, padding: 15}}>
      <Text style={{color: 'blue', fontSize: 35}}>Welcome to App</Text>
      <Text style={{color: '#a1caf1'}}>
        Create your account to make your first business card
      </Text>
      <View>
        <FlatList
          data={fields}
          renderItem={({item}) => (
            <View style={styles.inputfield}>
              <Text>{item.name}</Text>
              <TextInput placeholder={item.placeholder} />
            </View>
          )}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Checkbox onValueChange={setIsCheck} value={isCheck} />
        <Text style={{alignSelf: 'center'}}>
          I accept the terms and conditions
        </Text>
      </View>
      <View style={{marginTop: 20, gap: 15}}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignSelf: 'center'}}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('login', {name: 'login'})}>
            <Text style={{color: 'blue'}}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'blue',
              alignSelf: 'center',
              height: 60,
              borderRadius: 20,
              width: 300,
            }}
            onPress={() => navigation.navigate('login', {name: 'login'})}>
            <Text
              style={{
                color: 'white',
              }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  textInput: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputfield: {
    borderWidth: 2,
    borderRadius: 20,
    height: 70,
    borderColor: 'gray',
    paddingStart: 25,
    marginBottom: 20
  },
});
