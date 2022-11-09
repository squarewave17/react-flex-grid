import { useState} from 'react'
import DropDown from './components/DropDown'
import DisplayArea from './components/DisplayArea'
import './App.css'
import {flexContainer, flexDirection, justifyContent} from './assets/classNames'

console.log(flexContainer, flexDirection, justifyContent)
function App() {
/**
 * State
 */
  const [mode, setMode] = useState('flexbox')
  const [container, setContainer] = useState('flex')
  const [direction, setDirection] = useState('row')
  const [justify, setJustify] = useState('flex-start')

  // const [inStyle, setInStyle] = useState({
  //   display: container,
  //   flexDirection: direction
  // })

  return (
    <div className="App">
      <div className="settings">
        <DropDown options={flexContainer} name="container" onPropChange={setContainer} />
        <DropDown options={flexDirection} name="flex-direction" onPropChange={setDirection} />
        <DropDown options={justifyContent} name="justify-content" onPropChange={setJustify} />
      </div>
      
      <DisplayArea container={container} direction={direction} justify={justify} />
    </div>   
  )
}

export default App
