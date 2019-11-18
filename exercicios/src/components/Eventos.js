import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Padrao from '../styles/Padrao'

export default class Eventos extends Component {
  state = {
    texto: ''
  }
  alterarTexto = texto => {
    this.setState({ texto })
  }

  render() {
    return (
      <View>
        <Text style={Padrao.f40}>{this.state.texto}</Text>
        <TextInput onChangeText={this.alterarTexto}
          style={Padrao.input} value={this.state.texto} />
      </View>
    )
  }

}