import { getStorybookUI, configure } from '@storybook/react-native'
import { loadStories } from './storyLoader'

import './rn-addons'

configure(() => {
    loadStories()
}, module)

const StorybookUI = getStorybookUI({
    port: 7007, //Enable im mobile
    host: '0.0.0.0',
    onDeviceUI: false,
    //resetStorybook: true,
    disableWebsockets: true,
    asyncStorage: require('react-native').AsyncStorage, // null for emulators
})
export default StorybookUI
