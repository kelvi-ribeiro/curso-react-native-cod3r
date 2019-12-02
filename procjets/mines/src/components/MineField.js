import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default ({ board }) => {
  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />
    })
    return <View style={{flexDirection:'row'}} key={r}>{columns}</View>
  })
  return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#EEE'
  }
})