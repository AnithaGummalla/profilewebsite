import React, {useCallback, useRef, useMemo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Fontawesome from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {key: 1, icon: 'phone', name: 'Numbers', color: 'blue'},
  {key: 2, icon: 'link', name: 'Links', color: 'blue'},
  {
    key: 3,
    icon: 'linkedin',
    name: 'Accounts',
    color: 'white',
    backgroundColor: 'blue',
  },
  {key: 4, icon: 'instagram', name: 'Account', color: '#ff1493'},
  {key: 5, icon: 'twitter', name: 'Account', color: '#1e90ff'},
  {
    key: 6,
    icon: 'facebook',
    name: 'Accounts',
    color: 'blue',
  },
  {key: 7, icon: 'youtube', name: 'Account', color: 'red'},
  {key: 8, icon: 'github', name: 'Account', color: 'black'},
  {key: 9, icon: 'globe', name: 'Account', color: '#ff69b4'},
  {
    key: 10,
    icon: 'behance',
    name: 'Account',
    color: 'white',
    backgroundColor: 'blue',
  },
  {key: 11, icon: 'spotify', name: 'Account', color: '#32cd32'},
  {key: 12, icon: 'twitch', name: 'Account', color: '#8a2be2'},
];

const Sheet = () => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['50%', '95%'], []);

  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  // renderItem
  const renderItem = ({item}) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          width: 100,
          height: 85,
          margin: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Fontawesome
          name={item.icon}
          size={40}
          color={item.color}
          style={{
            backgroundColor: item.backgroundColor,
          }}
        />
        <Text style={{fontSize: 10, color: 'blue'}}>{item.name}</Text>
      </View>
    </View>
  );
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <BottomSheet
          ref={sheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChange}>
          <BottomSheetScrollView
            contentContainerStyle={styles.contentContainer}>
            <View>
              <FlatList
                data={DATA}
                numColumns={3}
                renderItem={({item}) => (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'aliceblue',
                    }}>
                    <Pressable
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 20,
                        width: 100,
                        height: 85,
                        margin: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => Alert.alert('navigation')}>
                      <Fontawesome
                        name={item.icon}
                        size={40}
                        color={item.color}
                        style={{
                          backgroundColor: item.backgroundColor,
                        }}
                      />
                      <Text style={{fontSize: 10, color: 'blue'}}>
                        {item.name}
                      </Text>
                    </Pressable>
                  </View>
                )}
              />
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 1050,
    display: 'flex',
    // alignItems: 'flex-start',
    height: '109%',
  },
  contentContainer: {
    paddingTop: 20,
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});

export default Sheet;
