import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default ({ mined, opened, nearMines, exploded, flagged, onOpen, onSelect }) => {

  const styleFiled = [styles.field]
  if (opened) styleFiled.push(styles.opened)
  if (exploded) styleFiled.push(styles.exploded)
  if (flagged) styleFiled.push(styles.flagged)
  if (exploded) styleFiled.push(styles.exploded)
  if (!opened && !exploded) styleFiled.push(styles.regular)

  let color = null
  if (nearMines > 0) {
    if (nearMines == 1) color = '#2A28D7'
    if (nearMines == 2) color = '#2B520F'
    if (nearMines > 2 && nearMines < 6) color = '#F9060A'
    if (nearMines >= 6) color = '#F221A9'
  }
  return (
    <TouchableWithoutFeedback onPress={onOpen}
    onLongPress={onSelect}>
      <View style={styleFiled}>
        {!mined && opened && nearMines > 0 &&
          <Text style={[styles.label, { color }]}>
            {nearMines}
          </Text>
        }
        {mined && opened && <Mine />}
        {flagged && !opened && <Flag />}
      </View>
    </TouchableWithoutFeedback>
  )

}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red'
  }
})