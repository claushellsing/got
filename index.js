import 'expo/build/Expo.fx'
import registerRootComponent from 'expo/build/launch/registerRootComponent'
import { activateKeepAwake } from 'expo-keep-awake'

if (__DEV__) {
    activateKeepAwake()
}

/** TODO dynamic env loading */
const Root = false ? require('./App.js').default : require('./Story.js').default

registerRootComponent(Root)
