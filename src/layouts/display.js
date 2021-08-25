import React from 'react'
import Input from '../components/input'
import Result from '../components/result'

export default function Display ({ inputState }) {
    const tempState = JSON.parse(JSON.stringify(inputState))
    console.log(tempState)
    while (tempState.length && isNaN(tempState[tempState.length - 1].value?.substr(-1)))
        tempState.pop()

    const result = Number(eval(tempState.map(x => x.value).join('')) || 0)
    let resultText = result === parseInt(result) ? String(parseInt(result)) : result.toFixed(4)

    while(~resultText.indexOf('.') && resultText.substr(-1) === '0')
        resultText = resultText.substr(0, resultText.length - 1)

    return <div className="w-full">
        <div>
            <Input text={ inputState.map(x => x.text).join('') }/>
        </div>
        <div>
            <Result text={ resultText } />
        </div>
    </div>
}