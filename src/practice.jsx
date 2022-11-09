import { useState, useCallback } from 'react'

const Practice5 = () => {

    const [name, setName] = useState('hello')

  return (
    <div className="practice">
          <p>{ name }</p>
          <UserInput label="An Input" onNameChange={setName} />
    </div>
  );
};


  
const UserInput = ({label, onNameChange}) => {

    const handleInput = useCallback(e => {
    onNameChange(e.target.value)
    }, [onNameChange]);
    
    return (
        
        <input type="text" label={label} onChange={handleInput} />
    )
}



export default Practice5;
