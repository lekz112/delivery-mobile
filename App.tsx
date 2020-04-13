import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RestaurantListItem } from './components/restaurant/RestaurantListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantListItem
        imageUrl="https://static.lieferando.de/images/generic/headers/541/generic.jpg"
        title="Burger's place"
        tags={['Burgers']}
      />
      <RestaurantListItem
        imageUrl="https://static.lieferando.de/images/generic/headers/541/generic.jpg"
        title="Burger's place"
        tags={['Burgers']}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
