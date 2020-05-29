import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';


export default function Card() {
    return (
        <View style={styles.card}>
            <Image style={styles.picture} 
            source={{uri: "https://i.insider.com/5e84a14392e191478763ef84?width=1100&format=jpeg&auto=webp"}} />
            <View style={styles.info}>
                <Text style={styles.name}>Colton Underwood <Text style={styles.highlight}>23</Text></Text>
                <Text style={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 8,
        flexDirection: 'row',
        padding: 16,
        borderRadius: 16,
        backgroundColor: '#F9F9F9',

        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,

        // For android
        elevation: 2,
    },

    picture: {
        height: 80,
        width: 80,
        borderRadius: 44
    },

    info: {
        flex: 1,
        paddingLeft: 4,
        alignItems: 'flex-end'
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right'
    },

    highlight: {
        color: '#FF6767'
    },

    bio: {
        fontSize: 16,
        textAlign: 'right',
        color: '#555555'
    }
})
