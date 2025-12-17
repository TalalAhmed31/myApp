import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/shared/Header';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header title="Home" showBackButton={true} />
            <View style={styles.content}>
                <Text>Home Screen</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
