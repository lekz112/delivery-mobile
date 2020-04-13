import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export interface RestaurantListItemProps {
    title: string;
    tags: string[];
    imageUrl: string;
}

export const RestaurantListItem = (props: RestaurantListItemProps) => {
    const { title, imageUrl, tags } = props;

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.tag}>{tags.join(', ')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: '1em',
        width: '100%',
    },
    image: {
        backgroundColor: 'green',
        width: '100%',
        paddingTop: '56.25%', // 16:9 aspect ratio
    },
    title: {
        marginTop: '1em',
        fontSize: 18,
        fontWeight: '800',
    },
    tag: {
        marginTop: '0.5em',
        fontWeight: "100"
    }
})