import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Display from './src/components/Display'
import {
} from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/Button'

const initialState = {
  displayValue: '0',
  operation: null,
  defaultClearDisplay: false,
  values: [0, 0],
  current: 0
}

export default App = () => {
  const [displayValue, setDisplayValue] = useState(initialState.displayValue)
  const [defaultClearDisplay, setDefaultClearDisplay] = useState(initialState.defaultClearDisplay)
  const [operation, setOperation] = useState(initialState.operation)
  const [values, setValues] = useState(initialState.values)
  const [current, setCurrent] = useState(initialState.current)

  addDigit = digit => {
    const clearDisplay = displayValue === '0' || defaultClearDisplay
    if (digit === '.' && !defaultClearDisplay && displayValue.includes('.')) return
    const copyDisplayValue = (clearDisplay ? '' : displayValue) + digit
    const copyValues = values
    if (digit !== '.') {
      const newValue = parseFloat(copyDisplayValue)
      copyValues[current] = newValue
    }
    setValues(copyValues)
    setDisplayValue(copyDisplayValue)
    setDefaultClearDisplay(false)
  }

  clearMemory = () => {
    setDisplayValue(initialState.displayValue)
    setDefaultClearDisplay(initialState.defaultClearDisplay)
    setOperation(initialState.operation)
    setValues(initialState.values)
    setCurrent(initialState.current)
  }

  beforeSetOperation = operator => {
    if (current === 0) {
      setOperation(operator)
      setCurrent(1)
      setDefaultClearDisplay(true)
    } else {
      const equals = operator === '='
      const copyValues = [...initialState.values]
      try {
        copyValues[0] = eval(`${copyValues[0]} ${operation} ${copyValues[1]}`)
      } catch (error) {
        copyValues[0] = values[0]
      }
      copyValues[1] = 0
      setDisplayValue(`${copyValues[0]}`)
      setOperation(equals ? null : operator)
      setCurrent(equals ? 0 : 1)
      setDefaultClearDisplay(!equals)
      setValues(copyValues)
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button triple label='AC' onClick={clearMemory} />
        <Button label='/' operation onClick={beforeSetOperation} />
        <Button label='7' onClick={addDigit} />
        <Button label='8' onClick={addDigit} />
        <Button label='9' onClick={addDigit} />
        <Button label='*' operation onClick={beforeSetOperation} />
        <Button label='4' onClick={addDigit} />
        <Button label='5' onClick={addDigit} />
        <Button label='6' onClick={addDigit} />
        <Button label='-' operation onClick={beforeSetOperation} />
        <Button label='1' onClick={addDigit} />
        <Button label='2' onClick={addDigit} />
        <Button label='3' onClick={addDigit} />
        <Button label='+' operation onClick={beforeSetOperation} />
        <Button label='0' double onClick={addDigit} />
        <Button label='.' onClick={addDigit} />
        <Button label='=' operation onClick={beforeSetOperation} />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
