import { createAppContainer, } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../screens/Home'
import AddNote from '../screens/AddNote'
import EditNote from '../screens/EditNote'
import  CustomDrawer from '../components/CustomDrawer'

const HomeNavigator = createStackNavigator({
    Home,
    AddNote,
    EditNote
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
})

const DrawerNavigation = createDrawerNavigator({
    Menu: {
        screen: HomeNavigator
    },
    Home,
    AddNote,
    EditNote
}, {
    contentComponent: CustomDrawer
})

export default createAppContainer(DrawerNavigation)