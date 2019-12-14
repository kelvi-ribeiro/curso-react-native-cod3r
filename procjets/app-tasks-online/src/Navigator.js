import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'

const MainRoutes = createStackNavigator({
  Auth: {
    name: 'Auth',
    screen: Auth
  },
  Home: {
    name: 'Home',
    screen: Agenda
  },
},
  {
    initialRouteName: 'Auth',
    headerMode:'none'
  })

const MainNavigator = createAppContainer(MainRoutes)

export default MainNavigator
