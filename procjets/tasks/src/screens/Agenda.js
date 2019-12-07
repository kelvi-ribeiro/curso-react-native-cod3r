import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task'

export default class Agenda extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage}
          style={styles.background}>
          <Text style={styles.title}>Hoje</Text>
          <Text style={styles.subtitle}>{moment().locale('pt-br').format('ddd, D [de] MMMM')}</Text>
        </ImageBackground>
        <View style={styles.taskContainer}>
          <Task description="Tarefa pendente" estimateAt={new Date()} doneAt={null}/>
          <Task description="Tarefa concluída" estimateAt={new Date()} doneAt={new Date()}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  background: {
    flex: 3
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.seconday,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.seconday,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30
  },
  taskContainer: {
    flex: 7
  }
})
