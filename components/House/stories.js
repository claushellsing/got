import React from 'react'
import { storiesOf } from '@storybook/react-native'
import House from './index'
import { View } from 'react-native'

const style = {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 10,
    borderColor: 'gray',
}

const CenteredView = ({ children }) => <View style={style}>{children}</View>

storiesOf('Housse', module)
    .addDecorator(storyFn => <CenteredView>{storyFn()}</CenteredView>)
    .add('default', () => {
        return <House></House>
    })
