import React from 'react'
import { Text } from 'react-native'
import Padrao from '../styles/Padrao'

export const Inverter = ({ texto }) => {
  const inv = texto.split('').reverse().join('')
  return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = ({ numbers }) => {  
  const maxLength = numbers || 6
  const [min, max] = [1, maxLength > 60 ? maxLength : 60 ]
  numbers = new Set()
  while (numbers.size < maxLength) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min)
  }
  numbers = [...numbers].sort((a, b) => a - b)

  return <Text style={Padrao.ex}>{numbers.join(', ')}</Text>
}