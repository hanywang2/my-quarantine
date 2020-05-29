import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import Profile from './screens/Profile.jsx';
import Discover from './screens/Discover.jsx';

export default function App() {
  return (
    // First coding video
    <>
      {/* <Profile></Profile> */}
      <Discover></Discover>
    </>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1
  },

  container: {
    paddingTop: 32,
    paddingHorizontal: 32
  },

  header: {
    fontSize: 32,
    fontWeight: 'bold'
  },

  subHeader: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6767'
  },

  description: {
    marginTop: 8,
    fontSize: 16,
    color: '#555555'
  },

  picture: {
    marginTop: 16,
    height: 234,
    borderRadius: 24
  }
});
