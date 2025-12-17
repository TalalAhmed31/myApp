import React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import Header from '../components/shared/Header';
import Card from '../components/shared/Card';
import { DATA, Product } from '../data/cardData';

const Home = () => {
    const renderItem = ({ item }: { item: Product }) => (
        <Card item={item} onPress={() => console.log('Pressed', item.title)} />
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Header title="Discover" />

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View style={styles.headerComponent}>
                        <Text style={styles.welcomeText}>New Arrivals</Text>
                        <Text style={styles.subText}>Best products for you</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    listContent: {
        padding: 16,
        paddingBottom: 40,
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    headerComponent: {
        marginBottom: 20,
        marginTop: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    }
});

export default Home;
