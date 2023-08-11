import {View, Text, SectionList, FlatList} from 'react-native';
import React, {useState} from 'react';

const CompanyDetails = () => {
  const [details, setDetails] = useState([
    {title: 'Personal Details'},
    {name: 'Company:', company: 'Indian National cricket team'},
    {designation: 'Designation:', desig: 'Indian Cricketer'},
    {roleName: 'Role:', role: 'Top Order Batter'},
    {mobile: 'mobile:', number: '+91-7064582309'},
  ]);
  return (
    <View style={{marginTop: 30}}>
      <Text   style={{
          color: 'black',
          fontWeight: 'bold',
          marginTop: 10,
          fontSize: 20,
        }}>CompanyDetails</Text>
      <FlatList
        data={details}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'white', gap: -20}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18}}>{item.name}</Text>
              <Text style={{fontSize: 16, color: 'black', fontWeight:'bold'}}>{item.company}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18}}>{item.designation}</Text>
              <Text style={{fontSize: 16, color: 'black', fontWeight:'bold'}}>{item.desig}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18}}>{item.roleName}</Text>
              <Text style={{fontSize: 16, color: 'black', fontWeight:'bold'}}>{item.role}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18}}>{item.mobile}</Text>
              <Text style={{fontSize: 16, color: 'black', fontWeight:'bold'}}>{item.number}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CompanyDetails;
