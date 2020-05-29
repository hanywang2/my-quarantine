import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './screens/Login.jsx';
import Profile from './screens/Profile.jsx';
import Discover from './screens/Discover.jsx';

export default function App() {
  
  const isLoggedIn = false;

  const Tab = createBottomTabNavigator();

  return (
    // 0 - Intro to Javascript
    // First coding video - Building profile (everything basic about react native)
    // Second coding video - Building initial discover screen (similar but with views)
    // Third coding video - Using components (building reusable components)
    // Fourth coding video - Loading components from data (loading components from data)
    // Fifth coding video - React navigation (setting it up and integrating it)
    // Sixth coding video - Expo tools (email profile)
    // Seventh coding video - Authentication navigation (conditional rendering) and login page
    // Eighth coding video - Firebase introduction and setup
    <>
    {
      (isLoggedIn === true) ?
      <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Discover') {
              iconName = 'ios-compass';
            } else if (route.name === 'Profile') {
              iconName = 'ios-person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    :
    <Login />
    }
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
