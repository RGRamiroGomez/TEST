import React from 'react'

const Buttons = ({text,color,funcion
}) => {
    return (
        <button styles={{backgroundColor:color}} onClick={funcion}>{text}</button>
    )
}

export default Buttons