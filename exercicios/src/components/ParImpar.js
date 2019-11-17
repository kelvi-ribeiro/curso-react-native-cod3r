import React from 'react'
import { View, Text } from 'react-native'
import { ex } from '../styles/Padrao'
import If from './If'

/* const parOuImpar = number => number % 2 == 0 ? <Text style={ex}>Par</Text> : <Text style={ex}> Impar</Text> */


export default ({ number }) =>
  <View>
    <If test={number % 2 === 0}>
      <Text style={ex}>Par</Text>
    </If>
    <If test={number % 2 !== 0}>
      <Text style={ex}>Ímpar</Text>
    </If>
  </View>