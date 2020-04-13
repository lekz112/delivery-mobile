import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RestaurantListItem } from './components/restaurant/RestaurantListItem';
import { RestaurantItem, RestaurantList } from './components/restaurant/RestaurantList';

export default function App() {
  const data: RestaurantItem[] = [
    {
      id: '0',
      imageUrl: "https://static.lieferando.de/images/generic/headers/541/generic.jpg",
      title: "Burger's place",
      tags: ['$', 'Burgers'],
    },
    {
      id: '1',
      imageUrl: "https://static.lieferando.de/images/generic/headers/541/generic.jpg",
      title: "Burger's place",
      tags: ['Burgers'],
    },
    {
      id: '2',
      imageUrl: "https://static.lieferando.de/images/generic/headers/541/generic.jpg",
      title: "Burger's place",
      tags: ['Burgers'],
    },
    {
      id: '3',
      imageUrl: "https://static.lieferando.de/images/generic/headers/541/generic.jpg",
      title: "Burger's place",
      tags: ['Burgers'],
    },
    {
      id: '4',
      imageUrl: "https://static.lieferando.de/images/generic/headers/541/generic.jpg",
      title: "Burger's place",
      tags: ['Burgers'],
    },    
  ]

  return (
    <View style={styles.container}>
      <RestaurantList items={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '100vh',
  },
});
