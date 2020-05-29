import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';


export default function Card(props) {
    return (
        <View style={styles.card}>
            <Image style={styles.picture} 
            source={{uri: props.picture}} />
            <View style={styles.info}>
                <Text style={styles.name}>{props.name} <Text style={styles.highlight}>{props.age}</Text></Text>
                <Text style={styles.bio}>{props.bio}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 16,
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
        textAlign: 'right',
        color: '#333'
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
