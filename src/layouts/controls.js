import React from 'react'
import Control from '../components/control'

export default function Controls () {
    return <div className="flex">
        <Control color="red"/>
        <div className="mx-2">
            <Control color="yellow"/>
        </div>
        <Control color="green"/>
    </div>

}