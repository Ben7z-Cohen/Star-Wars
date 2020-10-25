import React from 'react'

const InputBox = ({ value, onChange, name, type }) => {
    return (
        <div>
            <label className="db fw6 lh-copy f6" htmlFor={name}>{name}</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type={type}
                name={name} id={name} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}
export default InputBox;