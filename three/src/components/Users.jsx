import React, { useEffect, useState } from 'react';

import API from '../shared/jsonplaceholder';


const Users = () => {

    const [usersListState, setUsersListState] = useState([]);
        
    const [userNameState, setUserNameState] = useState('Enter new User Name');

    const [errorState, setErrorState] = useState('');


    const enterName = event => {
        setUserNameState(event.target.value);
    }

    const submitName = () => {
        API.post('users', {name: userNameState})
            .then(response => {
                console.log(response);
            })

    }


    useEffect(() => {
        
        console.log('kreipimasis i serveri');

        API.get('usedrs')
            .then(response => {
                console.log(response.data);
                setUsersListState(response.data);
                setErrorState('');    
            })
            .catch(error => {
                setErrorState('Error while getting user list');
                console.log(error.response);
            })

    }, []);


    return (
        <div className="big-box">
            <div className="inputas">
                <h3 style={{color: 'red'}}>{errorState}</h3>
                <input type="text" onChange={enterName} value={userNameState} placeholder={userNameState} />
                <button onClick={submitName} >Submit</button>
            </div>
            <ul>
                {usersListState.map(user => 
                    <li key={user.id}>
                        <span className="user-id">{user.id}.</span>
                        <span className="user-name">{user.name}</span>
                    </li>
                )}
            </ul>
        </div>
        );
}


export default Users;