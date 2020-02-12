import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Provider } from 'react-redux';
import ProfilePage from './client/components/profilePage'
import store from 'react-redux'

export default function App() {
  return (
 
      <View style={styles.container}>
        <Text>Allergy Pal</Text>
        <View>
          <ProfilePage />
        </View>
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const style = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
