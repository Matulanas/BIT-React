import React, { useEffect, useState } from 'react';

const Effect = () => {

    const [count, setCount] = useState(0); // Keičiasi nuo mygtuko
    const [date, setDate] = useState(new Date()); // Keičiasi nuo tiktako


    useEffect(() => {
        console.log('VISADA'); // Visda kai persirenderina
    });


    // Pririštas prie DATE steito
    useEffect(() => {
        console.log('DATE'); // Kai pasikeičia Date
    }, [date]);


    // Pririštas prie COUNT steito
    useEffect(() => {
        console.log('COUNT'); // Kai pasikeičia Count
    }, [count]);


    // componentSisMount veikimo imitacija
    useEffect(() => {
        // console.log('MOUNT');
        const timerID = setInterval(() => tictac(), 3000)
    }, []);


    // Pririštas prie MYGTUKO
    const tictac = () => {
        // console.log('tak taks');
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