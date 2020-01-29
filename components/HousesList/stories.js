import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import HousesList from './index'
import HousesData from '../../storybook/data'

const style = {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 10,
    borderColor: 'gray',
}

const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('HousesList', module)
    .addDecorator(storyFn => <CenteredView>{storyFn()}</CenteredView>)
    .add('default', () => {
        return <HousesList houses={HousesData} />
    })
