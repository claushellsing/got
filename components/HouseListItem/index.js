import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'

export default function HouseListItem({ name, image, region }) {
    return (
        <ListItem
            title={name}
            subtitle={region}
            leftAvatar={
                <Avatar
                    rounded
                    title=""
                    activeOpacity={0.3}
                    source={{ uri: image }}
                    containerStyle={{ marginRight: 10 }}
                />
            }
            bottomDivider
            chevron
        />
    )
}
