import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function Profile() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.header}>AJ Underwood</Text>
        <Text style={styles.subHeader}>Age: 23</Text>
        <Text style={styles.description}>Hello! My name is Microsoft. Can I crash at your place tonight?</Text>
        <Image style={styles.picture} source={{uri: "https://i.insider.com/5e84a14392e191478763ef84?width=1100&format=jpeg&auto=webp"}} />
        <View style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
        </View>
      </View>
    </SafeAreaView>
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
  },

  button: {
      marginTop: 24,
      width: '100%',
      backgroundColor: '#FF6767',
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 8,
      paddingVertical: 4
  },

  buttonText: {
      color: '#FFF',
      fontSize: 20,
      fontWeight: 'bold'
  }
});
