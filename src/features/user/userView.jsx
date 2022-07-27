import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

export const UserView = () => {

    const { isLoading, users, error  } = useSelector( state => state.user );
    const dispatch=   useDispatch();

    useEffect( () => {
        dispatch( fetchUsers()  )
    }, [] )

  return (
    <div>
        <h3> List of Users </h3>
        {
            isLoading ? <span>Loading...</span> :
            <div>
                <ul>
                    {
                        users && users.map( user => {
                            return ( <li key={ user.id }> { user.name } </li> )
                        } )
                    }
                    {
                        error && <span> { error } </span>
                    }
                </ul>
            </div>
        }
        {/* <button>Fetch Users</button> */}
    </div>
  )
}
