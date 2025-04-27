import React, { useRef } from 'react'

function ExampleUseRefFocus() {
    const ref = useRef(null)
    console.log("Component render")
  return (
    <div className='flex gap-5 items-center'>
      <div ref={ref}>Color</div>
           
           <button onClick={()=>{
            if(ref.current.style.backgroundColor ==="black"){
              ref.current.style.backgroundColor ="white";
              ref.current.style.color ="black"
            }else{
              ref.current.style.backgroundColor   ="black";
              ref.current.style.color ="white"
            }
           }}>Dark/light</button>
    </div>
  )
}

export default ExampleUseRefFocus