import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';

import Card from './Card';

export default function Discover() {
    const profiles = [
        {
            picture: "https://i.insider.com/5e84a14392e191478763ef84?width=1100&format=jpeg&auto=webp",
            name: "Colton Underwood",
            age: 23,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas."
        },
        {
            picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nickviall-89747516-251757629322778-1879807299067145470-n-1586800462.jpg",
            name: "Nick Viall",
            age: 22,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas."
        },
        {
            picture: "https://media4.s-nbcnews.com/j/streams/2013/March/130314/1C6440809-tdy-130312-sean-lowe.fit-760w.jpg",
            name: "Sean Lowe",
            age: 24,
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas."
        }
    ]

    return(
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Discover</Text>
                {
                    profiles.map((profile, i) => 
                        <Card 
                            key={i}
                            picture={profile.picture}
                            name={profile.name}
                            age={profile.age}
                            bio={profile.bio}
                        />
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        flex: 1
    },

    container: {
        paddingTop: 32,
        paddingHorizontal: 32,
    },

    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333'
    },
})