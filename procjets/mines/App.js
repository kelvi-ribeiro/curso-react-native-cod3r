import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import params from './src/params'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!!</Text>
      <Text style={styles.welcome}>O tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
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
