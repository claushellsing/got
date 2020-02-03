import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View, ScrollView } from 'react-native'
import RegionBadge from '@components/RegionBadge'
import HouseData from '../../storybook/data'
import { uniq } from 'lodash'

const style = {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 10,
    borderColor: 'gray',
}

const regions = uniq(HouseData.map(house => house.region))

const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('RegionBadge', module)
    .addDecorator(storyFn => <CenteredView>{storyFn()}</CenteredView>)
    .add('North', () => {
        return <RegionBadge region="North" />
    })
    .add('Dorne', () => {
        return <RegionBadge region="Dorne" />
    })
    .add('All', () => {
        return (
            <ScrollView>
                {regions.map(region => {
                    return <RegionBadge region={region} key={region} />
                })}
            </ScrollView>
        )
    })
