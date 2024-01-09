import '../App.css'
import React from 'react'

function Display(props) {
    return (
        <div className='output'>
            <div className='child'>
                {props.two}
            </div>
            <br />
            <div className='child'>
                {props.one}
            </div>
        </div>
    )
}

export default Display