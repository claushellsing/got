import React from 'react'
import { Icon } from 'react-native-elements'
import styled from 'styled-components/native'

const Badge = styled.View`
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgray;
    padding: 3px;
    border-radius: 50px;
    height: 30px;
`

const RegionName = styled.Text`
    margin-right: 5px;
    font-size: 14px;
    color: #575757;
`

export default function RegionBadge({ region }) {
    const regionIcons = {
        north: {
            name: 'snowflake-o',
            type: 'font-awesome',
            color: '#575757',
        },
        dorne: {
            name: 'sun-o',
            type: 'font-awesome',
            color: '#575757',
        },
    }

    const regionIcon = regionIcons[(region || '').toLowerCase()] ?? null

    return (
        <Badge>
            {regionIcon && <Icon size={19} {...regionIcon} />}
            <RegionName>{region || 'Unknown'}</RegionName>
        </Badge>
    )
}
