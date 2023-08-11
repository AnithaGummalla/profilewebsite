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

const Login = ({ navigation }) => {
  const [text, setText] = useState('');
  const [fields, setFields] = useState([
    {name: 'Email Address', placeholder: 'email address'},
    {name: 'Password', placeholder: 'password'},
  ]);
  return (
    <View style={{gap: 30, padding: 20}}>
        <Text style={{color: 'blue', fontSize: 35}}>Welcome back 👋</Text>
        <Text style={{color: '#b0c4de', fontSize: 15}}>
          Enter your Email and password to continue
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
            <TouchableOpacity>
            <Text style={{color: 'blue', fontSize: 18}}>Forgot password?</Text>
          </TouchableOpacity>
      </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 60,
          }}>
          <Text>or</Text>
          <TouchableOpacity>
            <Text style={{color: 'blue', fontSize: 18}}>
              Login with Mobile no.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, gap: 15}}>
      <View style={{display: 'flex', flexDirection: 'row',alignSelf: 'center'}}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate('signup', {name: 'signup'})}>
            <Text style={{color: 'blue'}}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'blue',
            alignSelf: 'center',
            height: 60,
            borderRadius: 20,
            width: 300,
          }}
          onPress={() => navigation.navigate('homescreen', { name: 'homescreen'})}
          >
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
export default Login;

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
