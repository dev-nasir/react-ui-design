import React from 'react'
import './styles.css'


const Card = ({ children }) => {
    return (
        <div className='Card'>
            {children}
        </div>
    )
}

export default Card