import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  TextInput,
} from 'react-native';
import {DataTable} from 'react-native-paper';

const DATA = [
  {
    title: 'A',
    data: [
      {name: 'anitha', phone: 78945},
      {name: 'akshay b', phone: 634},
      {name: 'akshay s', phone: 12709},
    ],
  },
  {
    title: 'M',
    data: [{name: 'mubina', phone: 5765776}],
  },
  {
    title: 'S',
    data: [
      {name: 'simon', phone: 7869},
      {name: 'shivanand', phone: 199988},
      {name: 'sachin', phone: 897976},
    ],
  },
  {
    title: 'Y',
    data: [{name: 'yuvaraj', phone: 789768}],
  },
];

const Data = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="search..."
        onChangeText={newText => setSearch(newText)}
        style={{borderWidth: 2}}
      />
      <Text>{search}</Text>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => {
          if (search !== '') {
            {
              if (item.name.startsWith(search) === true) {
               return (
                <View>
                <DataTable.Row>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.phone}</DataTable.Cell>
                </DataTable.Row>
              </View>
               )
              }
            }
          }else{
            return (
              <View>
              <DataTable.Row>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell>{item.phone}</DataTable.Cell>
              </DataTable.Row>
            </View>
             )
          }
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default Data;
