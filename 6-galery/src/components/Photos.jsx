import React, { useState, useEffect } from 'react';
import API from '../shared/photos';
import Photo from './Photo';

import PhotoBox from '../hocs/withPhotoBoxCompose';

const Photos = () => {

    const [photosListState, setPhotosListState] = useState([]);


    useEffect(() => {

        API.get('v2/list?page=1&limit=10')
            .then(response => {
                setPhotosListState(response.data);
            })
            .catch(error => {
                console.log(error.response);
            })
    }, []);

    const asc = () => {
        let listCopy = [...photosListState];
        listCopy.sort((a, b) => a.author.localeCompare(b.author));
        setPhotosListState(listCopy);
    }

    const desc = () => {
        let listCopy = [...photosListState];
        listCopy.sort((b, a) => a.author.localeCompare(b.author));
        setPhotosListState(listCopy);
    }

    const random = () => {
        let listCopy = [...photosListState];
        for (let i = listCopy.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = listCopy[i]
            listCopy[i] = listCopy[j]
            listCopy[j] = k
        }
        setPhotosListState(listCopy);
    }



    return (
        <div className="block">
            <div className="buttons">
            <button onClick={ asc } >A-Z</button>
            <button onClick={ desc } >Z-A</button>
            <button onClick={ random } >Random</button>
            </div>
            <PhotoBox images={photosListState} /> 
        </div>
    )
}

export default Photos;