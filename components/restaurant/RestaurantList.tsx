import React from 'react';
import { FlatList } from 'react-native';
import { RestaurantListItemProps, RestaurantListItem } from './RestaurantListItem';

export interface RestaurantItem {
    id: string;
    title: string;
    imageUrl: string;
    tags: string[];
}

export interface RestaurantListProps {
    items: RestaurantItem[];
}

export const RestaurantList = ({ items }: RestaurantListProps) => {
    return (
        <FlatList
            data={items}
            renderItem={({ item }) => <RestaurantListItem key={item.id} imageUrl={item.imageUrl} title={item.title} tags={item.tags} />}
        />
    )
}