import React from 'react'
import './Button.css'

const STYLES = ['btn__primary', 'btn__outline']

const SIZES = ['btn__medium', 'btn__large', 'btn__mobile', 'btn__wide']

const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
