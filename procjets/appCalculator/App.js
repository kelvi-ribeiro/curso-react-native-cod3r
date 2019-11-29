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
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default App = () => {
  const [displayValue, setDisplayValue] = useState(initialState.displayValue)
  const [clearDisplay, setClearDisplay] = useState(initialState.clearDisplay)
  const [operation, setOperation] = useState(initialState.operation)
  const [values, setValues] = useState(initialState.values)
  const [current, setCurrent] = useState(initialState.current)

  addDigit = digit => {
    if (digit === '.' && displayValue.includes('.')) return

    setClearDisplay(displayValue === '0' || clearDisplay)
    setDisplayValue(displayValue + digit)

    if (digit !== '.') {
      const newValue = parseFloat(displayValue)      
      values[current] = newValue
      setValues(values)
    }
  }

  clearMemory = () => {
    setDisplayValue(initialState.displayValue)
    setClearDisplay(initialState.clearDisplay)
    setOperation(initialState.operation)
    setValues(initialState.values)
    setCurrent(initialState.current)
  }

  setOperator = () => ''

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button triple label='AC' onClick={clearMemory} />
        <Button label='/' operation onClick={setOperator} />
        <Button label='7' onClick={addDigit} />
        <Button label='8' onClick={addDigit} />
        <Button label='9' onClick={addDigit} />
        <Button label='*' operation onClick={setOperator} />
        <Button label='4' onClick={addDigit} />
        <Button label='5' onClick={addDigit} />
        <Button label='6' onClick={addDigit} />
        <Button label='-' operation onClick={setOperator} />
        <Button label='1' onClick={addDigit} />
        <Button label='2' onClick={addDigit} />
        <Button label='3' onClick={addDigit} />
        <Button label='+' operation onClick={setOperator} />
        <Button label='0' double onClick={addDigit} />
        <Button label='.' onClick={addDigit} />
        <Button label='=' operation onClick={setOperator} />
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
