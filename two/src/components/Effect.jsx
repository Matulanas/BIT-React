import React, { useEffect, useState } from 'react';

const Effect = () => {

    const [count, setCount] = useState(0); // Keičiasi nuo mygtuko
    const [date, setDate] = useState(new Date()); // Keičiasi nuo tiktako



    useEffect(() => {
        console.log('Zdrf Efektai'); // Visda kai persirenderina
    });

    
    useEffect(() => {
        console.log('Zdrf TikcTakai'); // Kai pasikeičia Date
    }, [date]);


    useEffect(() => {
        console.log('Zdrf Count'); // Kai pasikeičia Count
    }, [count]);


    // componentSisMount veikimo imitacija
    useEffect(() => {
        console.log('MOUNT');
        const timerID = setInterval(() => tictac(), 3000)
    }, []);

    const tictac = () => {
        console.log('tak taks');
        setDate(new Date());
    };






    return (
        <div className="box">
            <p>Date: {date.toLocaleTimeString()}</p>
            <button onClick={() => {
                    setCount(counter => counter + 1);
                }}>
            Press
            </button>
            <p>Counter: {count}</p>
        </div>
    )
}

export default Effect;