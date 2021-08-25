import React, {useState} from 'react'
import Line from '../components/separator'
import Buttons from './buttons'
import Controls from './controls'
import Display from './display'

export default function Calc() {
    const [inputState, setInputState] = useState([])

    function handleChange(newItem) {
        setInputState([...inputState, newItem])
    }

    function handleClear() {
        setInputState([])
    }

    function handleSolve() {
        const tempState = JSON.parse(JSON.stringify(inputState))
        while (tempState.length && isNaN(tempState[tempState.length - 1].value.substr(-1)))
            tempState.pop()
        const result = String(eval(tempState.map(x => x.value).join('')))
        setInputState([{ text: result, value: result }])
    }

    return <div className="bg-white rounded-xl shadow-md p-4 flex flex-wrap mx-auto my-auto w-60">
        <div className="flex-initial w-full mb-4">
            <Controls />
        </div>
        <div className="flex-initial w-full mb-4">
            <Display inputState={inputState}/>
        </div>
        <div className="flex-initial w-full mb-4">
            <Line color="red-500"/>
        </div>
        <div className="flex-initial w-full">
            <Buttons handleChange={handleChange} handleClear={handleClear} handleSolve={handleSolve} />
        </div>
    </div>
}