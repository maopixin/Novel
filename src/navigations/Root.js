import { createStackNavigator ,createAppContainer} from 'react-navigation'; // Version can be specified in package.json
import Tab from './Tab';
import BookInfo from '../pages/BookInfo'
import Rank from '../pages/Rank'

const RootStack = createStackNavigator(
    {
      RootTab: {
        screen: Tab,
      },
      Rank:{
        screen: Rank
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