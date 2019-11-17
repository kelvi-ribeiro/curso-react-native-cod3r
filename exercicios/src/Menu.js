import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'

export default createDrawerNavigator({
  Simples: {
    screen: () => <Simples texto='Simples' />,
    navigationOptions: { title: 'Simples ' }
  },
  ParImpar: {
    screen: () => <ParImpar number={9} />,
    navigationOptions: { title: 'Par & Ímpar' }
  },
  MegaSena: {
    screen: () => <MegaSena numbers={8} />,
    navigationOptions: { title: 'Mega Sena' }
  },
  Inverter: {
    screen: () => <Inverter texto='avon' />,
    navigationOptions: { title: 'Inverter' }
  },

}, { drawerWidth: 300 })