import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Login from '../screens/Login';
import Mailing from '../screens/Mailing';
import Profile from '../screens/Profile';

const stackNavigatorOptions = {
    headerShown : false
}

const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Home:{screen:Home},
    Detail:{screen:Detail},
    Mailing:{screen:Mailing},
    Profile:{screen:Profile},
},
{
    defaultNavigationOptions:stackNavigatorOptions
});

export default createAppContainer(AppNavigator)