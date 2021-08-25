import React from 'react'

export default function Result ({ text }) {
    return <div className="w-full text-gray-500 text-right text-xl">
        { Boolean(text) ? text : 0 }
    </div>

}