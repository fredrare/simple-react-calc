import React from 'react'
import Button from './button'

export default function OperationButton ({ text, width=1, color='gray-200', hoverColor='gray-300', callback }) {
    return <Button 
        text={text}
        textColor={`black`}
        color={color}
        hoverColor={hoverColor}
        width={width}
        callback={callback}
    />
}