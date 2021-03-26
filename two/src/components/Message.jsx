import React, { useState } from 'react';

const Message = () => {

    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0);


    return (
        <div className="box">

            <input type="text" value={message} 
                onChange={event => {
                    setMessage(event.target.value);
                       
                    setCount(prevCount => prevCount + 1);
                }}/>

            <h1>Hello {message}!</h1>
            <p>Counter: {count}</p>
        </div>
    )
}

export default Message;