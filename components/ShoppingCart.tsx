import { View, Text, SectionList } from 'react-native'
import React from 'react'

const ShoppingCart = () => {
    const data = [
        {
          category: 'Fruits',
          data: [
            {name: 'Apple', quantity: 2, price: 1.99},
            {name: 'Banana', quantity: 3, price: 0.99},
            {name: 'Orange', quantity: 4, price: 0.79},
          ],
        },
        {
          category: 'Vegetables',
          data: [
            {name: 'Carrot', quantity: 5, price: 0.49},
            {name: 'Broccoli', quantity: 2, price: 1.29},
          ],
        },
      ];

      const renderItem = ({item}) => (
        <View>
            <Text>{item.name}</Text>
        </View>
      )
  return (
    <SectionList
        sections={data}
        keyExtractor={(item,index) => item + index}
        renderItem={renderItem}
    />
  )
}

export default ShoppingCart