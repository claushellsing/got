import React from 'react'
import { ListItem } from 'react-native-elements'
import styled from 'styled-components/native'

export default function HouseListItem({ name }) {
    return <ListItem title={name} />
}
