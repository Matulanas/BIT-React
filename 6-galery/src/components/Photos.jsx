import React, { useState, useEffect } from 'react';

import API from '../shared/photos';

import Photo from './Photo';

const Photos = () => {

    const [photosListState, setPhotosListState] = useState([]);
    const [current, setCurrent] = useState('');

    let list = photosListState;

    useEffect(() => {

        API.get('v2/list?page=1&limit=10')
            .then(response => {
                // console.log(response.data);
                setPhotosListState(response.data);
            })
            .catch(error => {
                console.log(error.response);
            })

    }, []);

    const asc = () => {
        list = photosListState.sort((a, b) => a.author.localeCompare(b.author));
        setPhotosListState(list);
        setCurrent(0);
    }

    const desc = () => {
        list = list.sort((b, a) => a.author.localeCompare(b.author));
        setPhotosListState(list);
        setCurrent(1);
    }

    const random = () => {
        for (let i = list.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = list[i]
            list[i] = list[j]
            list[j] = k
        }
        if ( current === 3 ) {
            setCurrent(current + 1)
        } else {
            setCurrent(3);
        }
        setPhotosListState(list);
    }


    useEffect(() => {
        const sorted = setPhotosListState(list);
    }, [current])


    return (
        <div className="block">
            <div className="buttons">
            <button onClick={ asc } >A-Z</button>
            <button onClick={ desc } >Z-A</button>
            <button onClick={ random } >Random</button>
            </div>
            <Photo images={photosListState} /> 
        </div>
    )
}

export default Photos;