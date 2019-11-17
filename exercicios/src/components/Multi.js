import React from 'react'
import { Text } from 'react-native'
import Padrao from '../styles/Padrao'

export const Inverter = ({ texto }) => {
  const inv = texto.split('').reverse().join('')
  return <Text style={Padrao.ex}>{inv}</Text>
}

export const MegaSena = ({ numbers }) => {
  const [min, max] = [1, 60]
  numbers = Array(numbers || 6).fill(0)

  for(let i = 0; i < numbers.length; i++){
    let novo = 0
    while (numbers.includes(novo)) {
      novo = Math.floor(Math.random() * (max - min + 1)) + min
    }
    numbers[i] = novo
  }

  
  numbers.sort((a, b) => a -b )

  return <Text style={Padrao.ex}>{numbers.join(', ')}</Text>
}