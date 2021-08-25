import React from 'react'

export default function Input ({ text }) {
    return <div className="w-full text-gray-400 text-right text-sm">
        { Boolean(text) ? text : 0 }
    </div>

}