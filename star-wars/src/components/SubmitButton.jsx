import React from 'react'

const SubmitButton = ({ name }) => {
    return (
        <input className="b ph3 pv2 input-reset 
        ba b--black bg-transparent grow pointer f6 dib"
            type="submit" value={name} />
    )
}
export default SubmitButton;
