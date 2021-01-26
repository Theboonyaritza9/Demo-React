import React from 'react'

function Button(props) {

    

    return (
        <button onClick={props.click}>
            {props.children}
        </button>
    )
}

export default Button
