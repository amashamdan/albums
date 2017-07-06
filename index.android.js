// import a livrary to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
/* flex style property has something to do with scrolling. I removed it but it didn't change anytinhg. It is also set in albmumDetails.js */
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText="Albums!" />
    <AlbumList />
  </View>
);
/*can instead write
const app = () -> {
  return (
    <Text>Some Text</Text>
  )
}
*/

//render the component to the device
AppRegistry.registerComponent('aAlbums', () => App);
