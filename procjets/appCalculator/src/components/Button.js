import React from 'react'
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888'
  },
  operationButton: {
    color: '#FFF',
    backgroundColor: '#fa8232',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3
  },
})

export default ({ double, triple, operation, onClick, label }) => {
  const stylesButton = [styles.button]
  if (double) stylesButton.push(styles.buttonDouble)
  if (triple) stylesButton.push(styles.buttonTriple)
  if (operation) stylesButton.push(styles.operationButton)
  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  )
}