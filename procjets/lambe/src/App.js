import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import Navigator from './Navigator'
import { setMessage } from './store/actions/message'

class App extends Component {
  componentDidUpdate = () => {
    if(this.props.text && this.props.text.toString().trim()){
      Alert.alert(this.props.title || 'Nova mensagem', this.props.text)
      this.props.clearMessage()
    }
  }
  render() {
    return (
      <Navigator />
    )
  }
}
const mapSateToProps = ({ message }) => {
  return {
    title: message.title,
    text: message.text
  }
}

mapDispatchToProps = dispatch => {
  return {
    clearMessage: () => (
      dispatch(setMessage({ title: '', text: '' }))
    )
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(App)
