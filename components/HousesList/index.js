import React from 'react'
import { FlatList, View } from 'react-native'
import HouseListItem from '../HouseListItem'

export default function HousesList({ houses }) {
    return (
        <View>
            <FlatList
                data={houses}
                renderItem={({ item }) => {
                    return <HouseListItem {...item} />
                }}
                keyExtractor={item => item.name}
            />
        </View>
    )
}
