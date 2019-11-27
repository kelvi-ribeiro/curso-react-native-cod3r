import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import ValidarProps from './components/ValidarProps'
import Eventos from './components/Eventos'
import { Avo } from './components/DirectComunication'
import TextoSincronizado from './components/IndirectComunication'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

export default createDrawerNavigator({
  Flex: {
    screen: () => <Flex />,
    navigationOptions: { title: 'Flex' }
  },
  ListaFlex: {
    screen: () => <ListaFlex />,
    navigationOptions: { title: 'Lista flex' }
  },
  TextoSincronizado: {
    screen: () => <TextoSincronizado texto={'a'} />,
    navigationOptions: { title: 'Texto Sincronizado (Comunicação indireta)' }
  },
  Avo: {
    screen: () => <Avo nome='João' sobrenome='Silva' />,
    navigationOptions: { title: 'Tag Avô (Comunicação direta)' }
  },
  Eventos: {
    screen: () => <Eventos />,
    navigationOptions: { title: 'Eventos' }
  },
  ValidarProps: {
    screen: () => <ValidarProps ano={18} />,
    navigationOptions: { title: 'Validar Props' }
  },
  Contador: {
    screen: () => <Contador />,
    navigationOptions: { title: 'Contador' }
  },
  Simples: {
    screen: () => <Simples texto='Simples' />,
    navigationOptions: { title: 'Simples' }
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