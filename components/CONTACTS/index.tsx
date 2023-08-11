import {
  View,
  Text,
  SectionList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {DataTable} from 'react-native-paper';

const DATA = [
  {
    data: [
      {name: 'anitha', phone: 78945},
      {name: 'akshay b', phone: 634},
      {name: 'akshay s', phone: 12709},
      {name: 'mubina', phone: 5765776},
      {name: 'simon', phone: 7869},
      {name: 'shivanand', phone: 199988},
      {name: 'sachin', phone: 897976},
      {name: 'yuvaraj', phone: 789768},
    ],
  },
];
const Contacts = () => {
  const [contacts, setContacts] = useState('');
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(true);

  return (
    <View>
      <Text>Contacts</Text>
      <TextInput
        style={{borderWidth: 3}}
        placeholder="search"
        onChangeText={newText => setSearch(newText)}
      />
      <Text>{contacts}</Text>
      <DataTable.Row>
        <DataTable.Cell>Name</DataTable.Cell>
        <DataTable.Cell>phone</DataTable.Cell>
      </DataTable.Row>
      <SectionList
        sections={DATA}
        renderItem={({item, index}) => {
          if (search !== '') {
            {
              if (item.name.startsWith(search) === true) {
                return (
                  <DataTable.Row>
                    <DataTable.Cell>{item.name}</DataTable.Cell>
                    <DataTable.Cell>{item.phone}</DataTable.Cell>
                  </DataTable.Row>
                );
              }
            }
          } else {
            return (
              <View>
                <DataTable.Row>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.phone}</DataTable.Cell>
                </DataTable.Row>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default Contacts;
