import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {

    const { numOfCakes } = useSelector( state => state.cake );
    const dispatch = useDispatch()

    return (
        <div>
            <h3> Number of Cakes - { numOfCakes }  </h3>
            <button onClick={ () => dispatch( ordered() ) } >Order Cake </button>
            <button onClick={ () => dispatch( restocked( 3 ) ) } >Restock Cakes</button>
        </div>
    )
}
