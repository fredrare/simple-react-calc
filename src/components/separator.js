import React from 'react'

export default function Line ({ color }) {
    return <div className={`w-full bg-${color} h-px`} />
}