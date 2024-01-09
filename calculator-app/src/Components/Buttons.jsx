import '../App.css'
import React from 'react'

function Buttons(props) {
    return (
        <div>
            <div className='display' onClick={props.inputHandler}>
                <button className='ac'>AC</button>
                <button className='del'>DEL</button>
                <button className="operator">+</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="operator">-</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className="operator">*</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button  className="operator">/</button>
                <button>0</button>
                <button>.</button>
                <button className="equals">=</button>
            </div>
        </div>
    )
}

export default Buttons
