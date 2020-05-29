import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';

import Card from './Card';

export default function Discover() {
    return(
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                <Text style={styles.header}>Discover</Text>
                <Card />
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
        fontWeight: 'bold'
    },
})