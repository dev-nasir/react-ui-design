import React from 'react'
import './styles.css'
import {Ellipse3} from './../../assets/images'

const Rank = () => {
    return (
        <div className='flex-row'>
            <div className='flex'>
            <h5>1</h5>
            <img src={Ellipse3} alt='Ellipse' />
            <p>twitter handle</p>
            <p>30000 Elo</p>
            </div>
        </div>
    )
}

export default Rank