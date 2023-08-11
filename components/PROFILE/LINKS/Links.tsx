// import { View, Text, Button, StyleSheet } from 'react-native'
// import React, { useCallback } from 'react'
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
// import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

// const Links = () => {
//     const DATA = [
//         {icon: 'Phone', name: 'Numbers'},
//         {icon: 'Links', name: 'Links'},
//         {icon: 'linkedIn', name: 'Accounts'},
//         {icon: 'instagram', name: 'Account'},
//         {icon: 'twitter', name: 'Account'},
//         {icon: 'facebook', name: 'Accounts'},
//         {icon: 'youtube', name: 'Account'},
//         {icon: 'github', name: 'Account'},
//         {icon: 'globe', name: 'Account'},
//         {icon: 'Be', name: 'Account'},
//         {icon: 'Spotify', name: 'Account'},
//         {icon: 'twich', name: 'Account'},
//     ]

//     const sheetRef = useRef<BottomSheet>(null);

//       // render
//   const renderItem = useCallback(
//     (item) => (
//       <View key={item} style={styles.itemContainer}>
//         <Text>{item}</Text>
//       </View>
//     ),
//     []
//   );

//   return (
//     <GestureHandlerRootView>
//         <BottomSheet
//         ref={sheetRef}
//         >
//         <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
//           {DATA.map(renderItem)}
//         </BottomSheetScrollView>
//         </BottomSheet>
//     </GestureHandlerRootView>
//   )
// }

// export default Links

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       paddingTop: 700,
//     },
//     itemContainer: {
//         padding: 6,
//         margin: 6,
//         backgroundColor: "#eee",
//       },
// })

import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Fontawesome from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {icon: 'phone', name: 'Numbers'},
  {icon: 'link-simple', name: 'Links'},
  {icon: 'linkedIn', name: 'Accounts'},
  {icon: 'instagram', name: 'Account'},
  {icon: 'twitter', name: 'Account'},
  {icon: 'facebook', name: 'Accounts'},
  {icon: 'youtube', name: 'Account'},
  {icon: 'github', name: 'Account'},
  {icon: 'globe', name: 'Account'},
  {icon: 'Be', name: 'Account'},
  {icon: 'Spotify', name: 'Account'},
  {icon: 'twich', name: 'Account'},
  {icon: 'phone', name: 'Numbers'},
  {icon: 'link-simple', name: 'Links'},
  {icon: 'linkedIn', name: 'Accounts'},
  {icon: 'instagram', name: 'Account'},
  {icon: 'twitter', name: 'Account'},
  {icon: 'facebook', name: 'Accounts'},
  {icon: 'youtube', name: 'Account'},
  {icon: 'github', name: 'Account'},
  {icon: 'globe', name: 'Account'},
  {icon: 'Be', name: 'Account'},
  {icon: 'Spotify', name: 'Account'},
  {icon: 'twich', name: 'Account'},
];

const Links = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['5%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <Text>Links</Text>
    // <View style={styles.container}>
    //   <View style={[styles.box, {backgroundColor: 'orangered'}]} />
    //     <View style={[styles.box, {backgroundColor: 'orange'}]} />
    //     <View style={[styles.box, {backgroundColor: 'mediumseagreen'}]} />
    //     <View style={[styles.box, {backgroundColor: 'deepskyblue'}]} />
    //     <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]} />
    //     <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    //     <View style={[styles.box, {backgroundColor: 'purple'}]} />
    // </View>
    // <GestureHandlerRootView>
    //   <View style={styles.container}>
    //     <BottomSheet
    //       ref={bottomSheetRef}
    //       index={1}
    //       snapPoints={snapPoints}
    //       onChange={handleSheetChanges}>
    //       <View style={styles.contentContainer}>
    //         <FlatList
    //           // horizontal={true}
    //           data={DATA}
    //           renderItem={({item}) => (
    //             <View
    //               style={{
    //                 backgroundColor: 'skyblue',
    //                 width: 100,
    //                 display: 'flex',
    //                 alignItems: 'flex-start',
    //                 // gap: 20,
    //                 // margin: 20,
    //                 // justifyContent: 'center',
    //                 // alignItems: 'center'
    //               }}>
    //               <Fontawesome name={item.icon} />
    //               <Text>{item.name}</Text>
    //             </View>
    //           )}
    //         />
    //       </View>
    //     </BottomSheet>
    //   </View>
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingTop: 2550,
  //   backgroundColor: 'grey',
  // },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 8,
    backgroundColor: 'aliceblue',
    maxHeight: 400,
    paddingTop: 2550,
  },
  // contentContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  // },
  box: {
    width: 50,
    height: 80,
  },
});

export default Links;
