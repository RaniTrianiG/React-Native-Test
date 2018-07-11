import { StackNavigator } from 'react-navigation';

import ImagesList from '../base/screens/base'
import VideosList from '../search/screens/search'

const RootNavigator = StackNavigator({
  ImagesList: {
    screen: ImagesList,
    navigationOptions: {
      title: 'Galery',
      headerStyle:{ backgroundColor: '#4A6572' },
      headerTintColor: '#fff'
    }
  },
  VideosList: {
    screen: VideosList,
    navigationOptions: {
      title: 'Videos',
      headerStyle:{ backgroundColor: '#4A6572' },
      headerTintColor: '#fff'
    }
  }
  
})

export default RootNavigator
