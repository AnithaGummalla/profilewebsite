import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import React, {useEffect, useRef, useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/EvilIcons';

const Scan = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const camera = useRef(null);
  const [imageData, setImageData] = useState('');
  const [takePhotoClicked, setTakePhotoClicked] = useState(false);

  useEffect(() => {
    checkPermission;
  }, []);

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log(checkPermission);
  };

  if (device == null) return <ActivityIndicator />;
  const takePicture = async () => {
    if (camera !== null) {
      const photo = await camera.current.takePhoto();
      setImageData(photo.path);
      setTakePhotoClicked(false);
      console.log(photo.path);
    }
  };
  return (
    <View style={{flex: 1}}>
      {takePhotoClicked ? (
        <View style={{flex: 1}}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo
          />
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#FF3C3C',
              bottom: 10,
              justifyContent: 'center',
              position: 'absolute',
              alignSelf: 'center',
            }}
            onPress={() => takePicture()}></TouchableOpacity>
        </View>
      ) : (
        <View style={{alignItems: 'center', display: 'flex', gap: 10}}>
          <Image
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/files-and-folders-13/100/File_text-256.png',
            }}
            style={{
              height: 120,
              width: 100,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 30,
              color: '#002bff',
            }}>
            Scan a new card
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: 'blue',
            }}>
            Just tap on scan card to add contact from physical card
          </Text>
          {imageData !== '' && (
            <Image
              source={{uri: 'file://' + imageData}}
              style={{width: '90%', height: 200}}
            />
          )}
          <TouchableOpacity
            style={{
              height: 40,
              width: 100,
              borderColor: 'blue',
              borderWidth: 1,
              bottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 20,
              padding: 10,
              marginTop: 30,
            }}
            onPress={() => setTakePhotoClicked(true)}>
            <Text style={{color: '#002bff'}}>Scan card </Text>
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '80%',
              borderColor: 'gray',
              borderWidth: 2,
              padding: 10,
              marginTop: 80,
            }}>
            <FontAwesome5 name="user" size={40} color="blue" />
            <Text style={{alignSelf: 'center', color: 'blue', fontSize: 18}}>
              See scaned contacts
            </Text>
            <FontAwesome5 name="angle-right" size={40} color="blue" />
          </View>
        </View>
      )}

      <FontAwesomeIcon name="phone-slash" size={100} />
      <FontAwesomeIcon name="phone-flip" size={100} />
      <FontAwesomeIcon icon="fa-regular fa-phone-flip" />
    </View>
  );
};

export default Scan;
