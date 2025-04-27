import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState_Buy from './components/UseState_Buy'
import UserList from './components/useEffect'
import ExampleUseRefFocus from './components/useRefFocus'
import ExampleUseRefGetValueInput from './components/refGetValue'
import ExampleUseReducer from './components/reducer'
function App() {
  return (
    <>

      <UseState_Buy></UseState_Buy>
      <UserList></UserList>
      <ExampleUseRefFocus></ExampleUseRefFocus>
      <ExampleUseRefGetValueInput></ExampleUseRefGetValueInput>
      <ExampleUseReducer></ExampleUseReducer>

    </>
  )
}

export default App
