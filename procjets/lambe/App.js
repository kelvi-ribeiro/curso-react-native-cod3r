import React, { Component } from 'react';
import { View } from 'react-native'
import Header from './src/components/Header';
import Post from './src/components/Post';

export default class App extends Component {
  render() {
    const comments =
      [
        {
          nickname: 'Kelvi Ribeiro',
          comment: 'Excelente Foto!'
        },
        {
          nickname: 'Márcia Lima',
          comment: 'Gostei da foto também. Hehehe'
        },
      ]
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post comments={comments} image={require('./assets/imgs/fence.jpg')} />
      </View>
    )

  };
}
