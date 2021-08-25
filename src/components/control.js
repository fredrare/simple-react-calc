import React from 'react'

export default function Control ({ color }) {
    return <div className={`rounded-full w-3 h-3 bg-${color}-400 hover:bg-${color}-500`} />
}
