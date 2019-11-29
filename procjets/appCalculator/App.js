import React from 'react';
import {
  StyleSheet,
  View,  
} from 'react-native';

import {  
} from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/Button'
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button label='AC'></Button>
        <Button label='/'></Button>
        <Button label='7'></Button>
        <Button label='8'></Button>
        <Button label='9'></Button>
        <Button label='*'></Button>
        <Button label='4'></Button>
        <Button label='5'></Button>
        <Button label='6'></Button>
        <Button label='-'></Button>
        <Button label='1'></Button>
        <Button label='2'></Button>
        <Button label='3'></Button>
        <Button label='+'></Button>
        <Button label='0'></Button>
        <Button label='.'></Button>
        <Button label='='></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  buttons: {
    flexDirection:'row',
    flexWrap:'wrap'
}
});

export default App;
