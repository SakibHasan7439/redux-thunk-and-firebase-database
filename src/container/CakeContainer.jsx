import React from 'react';
import { message } from 'antd';

const CakeContainer = () => {
    const handleButtonClick = () =>{
        message.info("Hello there how are you");    
    }

    return (
        <div className='cake-container'>
            <h2>Number of cakes: </h2>
            <button onClick={handleButtonClick} className='large-btn'>Buy Cake</button>
        </div>
    );
};

export default CakeContainer;