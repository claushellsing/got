import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native'
import { loadStories } from './storyLoader'

import './rn-addons'

// import stories
configure(() => {
    loadStories()
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
/*const StorybookUIRoot = getStorybookUI({
    port: 7007, //Enable im mobile
    host: '0.0.0.0',
    onDeviceUI: false,
    //resetStorybook: true,
    disableWebsockets: true,
    asyncStorage: require('react-native').AsyncStorage, // null for emulators
})*/

const StorybookUIRoot = getStorybookUI({
    onDeviceUI: false,
})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot)

export default StorybookUIRoot
