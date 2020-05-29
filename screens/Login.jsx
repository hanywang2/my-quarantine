import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

import firebaseSDK from 'firebase';
import firebase from '../firebase/config';

export default function Login() {

    const provider = new firebaseSDK.auth.GoogleAuthProvider();
    console.log(provider);

    firebase.auth.signInWithPopup(provider)
        .then((res) => {
            // console.log(res.credential);
        })
    
  return (
    <SafeAreaView style={styles.safe}>
        <Text style={styles.name}>My Quarantine</Text>
        <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
        />
        <Image
            style={styles.google}
            source={require('../assets/google.png')}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  name: {
    marginBottom: 24,
    fontSize: 28,
    color: '#FF6767',
    fontWeight: 'bold'
  },

  logo: {
      height: 120,
      width: 120
  },

  google: {
      marginTop: 24,
      height: 69,
      width: 245
  }
});
