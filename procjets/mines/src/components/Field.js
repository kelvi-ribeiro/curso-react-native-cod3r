import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import params from '../params'

export default ({ mined, opened, nearMines }) => {

  const styleFiled = [styles.field]
  if (opened) styleFiled.push(styles.opened)
  if (styleFiled.length === 1) styleFiled.push(styles.regular)
  let color = null
  if (nearMines > 0) {
    if (nearMines == 1) color = '#2A28D7'
    if (nearMines == 2) color = '#2B520F'
    if (nearMines > 2 && nearMines < 6) color = '#F9060A'
    if (nearMines >= 6) color = '#F221A9'
  }
  return (
    <View style={styleFiled}>
      {!mined && opened && nearMines > 0 &&
        <Text style={[styles.label, { color }]}>
          {nearMines}
        </Text>
      }
    </View>
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
    fontWeight:'bold',
    fontSize:params.fontSize
  }
})