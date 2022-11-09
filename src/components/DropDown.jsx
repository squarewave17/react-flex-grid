import { useCallback } from "react"
const DropDown = ({ options, name, onPropChange }) => {

    const handleSelect = useCallback(e => {
        onPropChange(e.target.value)
    } , [onPropChange]);


    return (
        <select name={name} onChange={handleSelect}>
            {options.map((name, index) => {
                return <option key={index} value={name}>{name}</option>
            })}
        </select>
    )
}

export default DropDown