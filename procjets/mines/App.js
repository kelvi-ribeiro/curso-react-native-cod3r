import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag
} from './src/functions'
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const rows = params.getRowsAmount()
    const cols = params.getColumnsAmount()
    return {
      board: createMineBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,


    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeeeeeeu!', 'Que buuuuro!')
    }

    if (won) {
      Alert.alert('Parabéns!', 'Você venceu!')
    }
    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)
    if(won) {
      Alert.alert('Parabéns', 'Você venceu')
    }
    this.setState({board, won})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!!</Text>
        <Text style={styles.welcome}>O tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <View style={styles.board}>
          <MineField onSelectField={this.onSelectField} onOpenField={this.onOpenField} board={this.state.board} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
