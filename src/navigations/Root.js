import { createStackNavigator ,createAppContainer} from 'react-navigation'; // Version can be specified in package.json
import Tab from './Tab';
import BookInfo from '../pages/BookInfo'

const RootStack = createStackNavigator(
    {
      RootTab: {
        screen: Tab,
      },
      BookInfo: {
        screen: BookInfo
      }
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
);

export default createAppContainer(RootStack)