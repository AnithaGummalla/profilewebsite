import {
    View,
    Text,
    Modal,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    Button,
  } from 'react-native';
  import React, {useState} from 'react';
  import Fontawesome from 'react-native-vector-icons/FontAwesome';
import WelcomeScreen from './WelcomeScreen';
  
  const WelcomeSignup = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    return (
      <View>
        <WelcomeScreen />
      <View style={{backgroundColor:'white', width: 390, borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 25}}>
         <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            width: '90%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
          }}
          onPress={() => {
            navigation.navigate('signup', { name: 'signup'})
          }}
          >
          <Text style={{color: 'white', fontSize: 15}}>
            Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            width: '90%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
          }}>
          <Text
          style={{color: 'blue', fontSize: 15}}
          >Login to App</Text>
        </TouchableOpacity>
         
         <Text>or</Text>
         <TouchableOpacity
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            width: '90%',
            height: 50,
            alignItems: 'center',
            borderRadius: 30,
            justifyContent: 'space-around',
            display: 'flex',
            flexDirection: 'row'
          }}>
            <Image source={{uri: 'https://img2.cgtrader.com/items/2590278/0572f24550/google-logo-v1-002-3d-model-low-poly-max-obj-3ds-fbx-ma-stl.jpg'}} 
            style={{height: 30, width: 20}} />
          <Text
          style={{color: 'blue', fontSize: 15}}
          >Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            width: '90%',
            height: 50,
            alignItems: 'center',
            borderRadius: 30,
            justifyContent: 'space-around',
            display: 'flex',
            flexDirection: 'row'
          }}>

            <Fontawesome name='facebook' size={20} color={"blue"} />
          <Text
          style={{color: 'blue', fontSize: 15}}
          >Continue with facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            width: '90%',
            height: 50,
            justifyContent: 'space-around',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 30,
          }}>
            <Fontawesome name='apple' size={20} />
          <Text
          style={{color: 'blue', fontSize: 15}}
          >Continue with apple</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
    );
  };
  
  export default WelcomeSignup;
  