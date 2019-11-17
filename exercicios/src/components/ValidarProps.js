import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

export default ValidarProps = ({ label, ano }) =>
  <Text style={{ fontSize: 35 }}>
    {label || ''}
    {ano + 2000}
  </Text>

ValidarProps.defaultProps = {
  label:'Ano: '
}

ValidarProps.propTypes = {
  ano:PropTypes.number.isRequired
}

