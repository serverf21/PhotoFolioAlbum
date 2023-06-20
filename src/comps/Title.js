import React from 'react';
import '../index.css'

const Title = () => {
    return (
        <div className="title">
            <div className='header'>
                <img src="https://cdn-icons-png.flaticon.com/512/3342/3342176.png" alt="" />
                <h1>PhotoFolio</h1>
            </div>
            <h2>Your Pictures</h2>
            <p>Tap on the "+" to add a new picture</p>
        </div>
    )
}

export default Title;