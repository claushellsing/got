import React from 'react'
import { View, ActivityIndicator, Text, FlatList } from 'react-native'
import { Icon, Image } from 'react-native-elements'
import RegionBadge from '../RegionBadge/'

import styled from 'styled-components/native'

const FullView = styled.View`
    flex: 1;
`

const HouseBanner = styled.View`
    align-items: center;
    padding: 5px;
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

const Titles = styled.View`
    margin-top: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const Title = styled.View`
    background-color: rgb(227, 227, 227);
    border-radius: 50px;
    padding: 5px 7px;
    margin: 2px 3px;
`

const InlineText = styled.View`
    flex-direction: row;
    margin: 5px 3px;
`

const InfoText = styled.Text`
    font-size: 15px;
`

const InfoLabel = styled(InfoText)`
    font-weight: bold;
    margin-right: 5px;
`

const OverLordTitle = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 5px;
`

export default function House({
    image,
    name,
    words,
    titles,
    overlords,
    currentLord,
    region,
    seat,
}) {
    return (
        <FullView>
            {image && (
                <HouseBanner>
                    <Image
                        source={{ uri: image }}
                        style={{ width: 150, height: 150 }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </HouseBanner>
            )}
            <View>
                <HouseName>{name}</HouseName>
                {words && <Words>{words}</Words>}
            </View>
            {titles && (
                <Titles>
                    {titles.map(title => {
                        return (
                            <Title key={title}>
                                <Text
                                    style={{ fontSize: 12, color: '#444444' }}
                                >
                                    {title}
                                </Text>
                            </Title>
                        )
                    })}
                </Titles>
            )}
            <View>
                <View style={{ marginTop: 10 }}>
                    <InlineText>
                        <InfoLabel>Current Lord:</InfoLabel>
                        <InfoText>{currentLord}</InfoText>
                    </InlineText>
                </View>
                <View>
                    {region && (
                        <InlineText style={{ alignItems: 'center' }}>
                            <InfoLabel>Region:</InfoLabel>
                            <RegionBadge region={region} />
                        </InlineText>
                    )}
                    {seat && (
                        <InlineText>
                            <InfoLabel>Seat:</InfoLabel>
                            <InfoText>{seat}</InfoText>
                        </InlineText>
                    )}
                </View>
                <View>
                    <OverLordTitle>Overlords</OverLordTitle>
                    <FlatList
                        data={overlords}
                        keyExtractor={item => item}
                        renderItem={({ item }) => {
                            return (
                                <InlineText style={{ alignItems: 'center' }}>
                                    <Icon
                                        size={12}
                                        name="circle"
                                        type="font-awesome"
                                        color="#c7c7c7"
                                    />
                                    <Text style={{ marginLeft: 5 }}>
                                        {item}
                                    </Text>
                                </InlineText>
                            )
                        }}
                    />
                </View>
            </View>
        </FullView>
    )
}
