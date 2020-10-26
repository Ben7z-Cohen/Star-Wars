import React from 'react'

const Sso = ({ url, name, icon }) => {
    return (
        <a className="no-underline near-white bg-animate bg-near-black 
        hover-bg-gray inline-flex items-center ma2 tc br2 pa2 w-100 pointer"
            title={name} onClick={url}>
            <img src={icon} alt={name} class="dib h2 w2" />
            <span className="f5 ml3 pr2"> Sign in with {name} </span>
        </a>
    )
}

export default Sso 
