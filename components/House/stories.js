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

const HouseManderly = {
    titles: [
        'Lord of White Harbor',
        'Warden of the White Knife',
        'Shield of the Faith',
        'Defender of the Dispossessed',
        'Lord Marshal of the Mander',
        'Knight',
        'Order of the Green Hand',
        'Dunstonbury',
    ],
    overlords: ['House Stark', 'House Bolton'],
    ancestralWeapon: [],
    _id: '5cc08102888dfb00103ccb9c',
    name: 'House Manderly',
    image:
        'https://awoiaf.westeros.org/thumb.php?f=House_Manderly.svg&width=250',
    coatOfArms:
        'A white merman with dark green hair, beard and tail, carrying a black trident, over a blue-green field(Aquamarine, a merman argent crined, bearded and queued vert, carrying a trident sable)',
    words: null,
    currentLord: 'Wyman Manderly',
    seat: 'New Castle',
    region: 'North',
    founded: null,
    founder: null,
    cadetBranch: null,
    heir: 'Wylis Manderly',
    isExtinct: false,
    createdAt: '2019-04-24T15:30:10.309Z',
    updatedAt: '2019-04-24T15:30:10.309Z',
    __v: 0,
}

const HouseStark = {
    titles: [
        'King in the North/King of Winter',
        'Lord of Winterfell',
        'Warden of the North',
        'King of the Trident',
    ],
    overlords: ["House Baratheon of King's Landing", 'House Bolton'],
    ancestralWeapon: [],
    _id: '5cc08102888dfb00103ccba4',
    name: 'House Stark',
    image: 'https://awoiaf.westeros.org/thumb.php?f=House_Stark.svg&width=250',
    coatOfArms:
        'A running grey direwolf, on an ice-white field(Argent, a direwolf courant cendrée)',
    words: 'Winter is Coming',
    currentLord: 'Bran Stark',
    seat: 'Winterfell',
    region: 'North',
    founded: null,
    founder: 'Bran the Builder',
    cadetBranch: 'House Greystark',
    heir: 'Rickon Stark',
    isExtinct: false,
    createdAt: '2019-04-24T15:30:10.312Z',
    updatedAt: '2019-04-24T15:30:10.312Z',
    __v: 0,
}

storiesOf('Housse', module)
    .addDecorator(storyFn => <CenteredView>{storyFn()}</CenteredView>)
    .add('Manderly', () => {
        return <House {...HouseManderly}></House>
    })
    .add('Stark', () => {
        return <House {...HouseStark}></House>
    })
