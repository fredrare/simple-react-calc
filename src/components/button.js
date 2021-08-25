import React from 'react'

export default function Button ({ color, hoverColor, textColor, text, callback }) {
    return <div 
        className={`rounded-full flex items-center justify-center text-${textColor} bg-${color} hover:bg-${hoverColor} h-full w-full`}
        onClick={callback}>
        <span>
            { text }
        </span>
    </div>
}