import React, { useReducer, useRef } from 'react'

function ExampleUseReducer() {
    const initialState = {
        counter: 0,
        name: ""
    }
    const ref = useRef(null)
    const reducer = (state, action) => {
        switch (action.type) {
            case "plus": {

                return { ...state, counter: state.counter + 1 }
            }
            case "minus": {

                return { ...state, counter: state.counter - 1 }
            }
            case "setname": {
                return { ...state, name: action.payload }
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div className='flex gap-5 items-center'>
                <button className='bg-red-500 p-4 text-white text-2xl font-bold' onClick={() => dispatch({ type: "minus" })}>-</button>
                <div>{state.counter}</div>
                <button className='bg-green-500 p-4 text-white text-2xl font-bold' onClick={() => dispatch({ type: "plus" })}>+</button>
            </div>
            <input ref={ref} type="text" placeholder='Enter your name' className='border' />
            <button onClick={() => {
                dispatch({ type: "setname", payload: ref.current.value })
            }}>Set new name</button>
            <div>{state.name}</div>
        </div>
    )
}

export default ExampleUseReducer