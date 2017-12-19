import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styled'

const Button = (props) => {
  const { children, onClick, primary } = props
  return (
    <StyledButton
      onClick={onClick}
      primary={primary}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
