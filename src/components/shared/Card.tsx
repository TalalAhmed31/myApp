import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Product } from '../../data/cardData';

interface CardProps {
    item: Product;
    onPress?: () => void;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 24; // 2 columns with padding

const Card = ({ item, onPress }: CardProps) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>★ {item.rating}</Text>
                </View>
            </View>

            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>{item.price}</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    imageContainer: {
        height: 140,
        width: '100%',
        backgroundColor: '#f0f0f0',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    ratingContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    ratingText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    details: {
        padding: 12,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 4,
    },
    description: {
        fontSize: 12,
        color: '#888',
        marginBottom: 8,
        lineHeight: 16,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF', // Using the primary color defined before
    },
    addButton: {
        backgroundColor: '#007AFF',
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginTop: -2,
    },
});

export default Card;
