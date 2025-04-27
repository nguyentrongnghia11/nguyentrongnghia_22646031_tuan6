import React, { useRef } from 'react'

function ExampleUseRefGetValueInput() {
    const ref = useRef(null)
    console.log("Component render")
  return (
    <div className='flex gap-5 items-center'>
           <input ref={ref} type="text" className='border' placeholder='Enter text' />
           <button onClick={()=>{
            console.log(ref.current.value)
           }}>Log value</button>
    </div>
  )
}

export default ExampleUseRefGetValueInput