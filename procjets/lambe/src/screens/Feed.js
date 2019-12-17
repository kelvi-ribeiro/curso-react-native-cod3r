import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends Component {
  state = {
    posts:
      [
        {
          id: Math.random(),
          nickname: 'Kelvi Ribeiro',
          email: 'kelvi.ribeiro@gmail.com',
          image: require('../../assets/imgs/fence.jpg'),
          comments: [
            {
              nickname: 'Antônio Lima',
              comment: 'Stunning!'
            },
            {
              nickname: 'Jackson Pereira',
              comment: 'Foto bem legal!'
            }
          ]
        },
        {
          id: Math.random(),
          nickname: 'Kauan Ribero',
          email: 'kauan.ribeiro.testeiro@gmail.com',
          image: require('../../assets/imgs/bw.jpg'),
          comments: []
        }
      ]
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) =>
            <Post key={item.id} {...item} />} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})
