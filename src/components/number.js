import React from 'react'
import Button from './button'

export default function NumberButton ({ text, color='white', hoverColor='gray-300', callback }) {
    return <Button 
        text={text}
        textColor={`black`}
        color={color}
        hoverColor={hoverColor}
        callback={callback}
    />
}