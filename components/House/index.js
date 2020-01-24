import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'
import styled from 'styled-components/native'

const HouseImage = styled.Image`
    height: 150px;
    width: 150px;
`

const FullView = styled.View`
    flex: 1;
`

const HouseBanner = styled.View`
    align-items: center;
    padding: 5px;
`

const HouseHeader = styled.View`
    background-color: 'lightgray';
`

const HouseName = styled.Text`
    text-align: center;
    font-size: 23px;
    font-weight: bold;
`

const Words = styled.Text`
    font-style: italic;
    font-size: 15px;
    text-align: center;
`

export default function House({ image, name, words, currentLord }) {
    return (
        <FullView>
            {image && (
                <HouseBanner>
                    <HouseImage
                        source={{ uri: image }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </HouseBanner>
            )}
            <HouseHeader>
                <HouseName>{name}</HouseName>
                {words && <Words>{words}</Words>}
            </HouseHeader>
            <View>
                {currentLord && (
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text>Lord:</Text>
                        <Text>{currentLord}</Text>
                    </View>
                )}
            </View>
        </FullView>
    )
}
