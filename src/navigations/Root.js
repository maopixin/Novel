import { createStackNavigator ,createAppContainer} from 'react-navigation'; // Version can be specified in package.json
import Tab from './Tab';

const RootStack = createStackNavigator(
    {
      RootTab: {
        screen: Tab,
      },
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
);

export default createAppContainer(RootStack)