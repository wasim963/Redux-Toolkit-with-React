import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {

    const[ value, setValue ] = useState( 1 );

    const dispatch = useDispatch();
    const { numOfIcecreams } = useSelector( state => state.icecream );

  return (
    <div>
        <h3> Number of Ice Creams - { numOfIcecreams }  </h3>
        <button onClick={ () => dispatch( ordered() ) } >Order Icecream </button><br/>
        <input type='number' value={ value } onChange={ e => setValue( parseInt( e.target.value !== '' ? e.target.value: 0 ) ) }  />
        <button onClick={ () => dispatch( restocked( value ) ) } >Restock Icecreams</button>
    </div>
  )
}
