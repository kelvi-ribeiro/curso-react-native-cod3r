import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Menu from './screens/Menu'
import Agenda from './screens/Agenda'
import Auth from './screens/Auth'
import commonStyles from './commonStyles';
import AuthOrApp from '../src/screens/AuthOrApp'
const MenuRoutes = {
  Today: {
    name: 'Today',
    screen: props => <Agenda title='Hoje' daysAhead={0} {...props}></Agenda>,
    navigationOptions: {
      title: 'Hoje'
    }
  },
  Tomorrow: {
    name: 'Tomorrow',
    screen: props => <Agenda title='Amanhã' daysAhead={1} {...props}></Agenda>,
    navigationOptions: {
      title: 'Amanhã'
    }
  },
  Week: {
    name: 'Week',
    screen: props => <Agenda title='Semana' daysAhead={7} {...props}></Agenda>,
    navigationOptions: {
      title: 'Semana'
    }
  },
  Month: {
    name: 'Month',
    screen: props => <Agenda title='Mês' daysAhead={30} {...props}></Agenda>,
    navigationOptions: {
      title: 'Mês'
    },
  }
}

const MenuConfig = {
  initialRouteName: 'Today',
  contentComponent: Menu,
  contentOptions: {
    labelStyle: {
      fontFamily: commonStyles.fontFamily,
      fontWeight: 'normal',
      fontSize: 20
    },
    activeLabelStyle: {
      color: '#080',
    }
  }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = createStackNavigator({
  Loading: {
    name: 'Loading',
    screen: AuthOrApp
  },
  Auth: {
    name: 'Auth',
    screen: Auth
  },
  Home: {
    name: 'Home',
    screen: MenuNavigator
  },
},
  {
    initialRouteName: 'Loading',
    headerMode: 'none'
  })

const MainNavigator = createAppContainer(MainRoutes)

export default MainNavigator
