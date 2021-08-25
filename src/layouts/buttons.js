import React from 'react'
import NumberButton from '../components/number'
import OperationButton from '../components/operation'

export default function Buttons ({ handleChange, handleClear, handleSolve }) {

    return <div className="grid grid-cols-4 gap-4 text-xl place-items-center">
        <div className="w-full h-10 col-span-2">
            <OperationButton text={'AC'} width={2} color={'red-400'} hoverColor={'red-500'} callback={handleClear}/>
        </div>
        <div className="w-full h-10">
            <OperationButton text={'%'} callback={() => handleChange({ text: '%', value: '/100' })}/>
        </div>
        <div className="w-full h-10">
            <OperationButton text={'÷'} callback={() => handleChange({ text: '÷', value: '/' })}/>
        </div>
        <div className="w-full h-10">
            <NumberButton text={'7'} callback={() => handleChange({ text: '7', value: '7' })}/>
        </div>
        <div className="w-full h-10">
            <NumberButton text={'8'} callback={() => handleChange({ text: '8', value: '8' })}/>
        </div>
        <div className="w-full h-10">
            <NumberButton text={'9'} callback={() => handleChange({ text: '9', value: '9' })}/>
        </div>
        <div className="w-full h-10">
            <OperationButton text={'×'} callback={() => handleChange({ text: '×', value: '*' })}/>
        </div>
        <div className="w-full h-10">
            <NumberButton text={'4'} callback={() => handleChange({ text: '4', value: '4' })}/>
        </div>
        <div className="w-full h-10">
            <NumberButton text={'5'} callback={() => handleChange({ text: '5', value: '5' })}/>
        </div>
        <div className="w-full h-10">
            <NumberButton text={'6'} callback={() => handleChange({ text: '6', value: '6' })}/>
        </div>
        <div className="w-full h-10">
            <OperationButton text={'−'} callback={() => handleChange({ text: '-', value: '-' })}/>
        </div>
        <div className="w-full h-10">
            <NumberButton text={'1'} callback={() => handleChange({ text: '1', value: '1' })}/>
        </div>
        <div className="w-full h-10">
            <NumberButton text={'2'} callback={() => handleChange({ text: '2', value: '2' })}/>
        </div>
        <div className="w-full h-10">
            <NumberButton text={'3'} callback={() => handleChange({ text: '3', value: '3' })}/>
        </div>
        <div className="w-full h-10">
            <OperationButton text={'+'} callback={() => handleChange({ text: '+', value: '+' })}/>
        </div>
        <div className="w-full h-10">
            <NumberButton text={'0'} callback={() => handleChange({ text: '0', value: '0' })}/>
        </div>
        <div className="w-full h-10">
            <OperationButton text={','} callback={() => handleChange({ text: ',', value: '.' })}/>
        </div>
        <div className="w-full h-10 col-span-2">
            <OperationButton text={'='} width={2} color={'yellow-400'} hoverColor={'yellow-500'} callback={handleSolve}/>
        </div>
    </div>
}