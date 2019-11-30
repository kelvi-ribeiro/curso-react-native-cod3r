import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!!</Text>
      <Text style={styles.welcome}>O tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={5} />
      <Field opened nearMines={8} />
      <Field mined opened/>
      <Field mined opened exploded/>
      <Field flagged/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    padding: 20
  },
});

export default App;
