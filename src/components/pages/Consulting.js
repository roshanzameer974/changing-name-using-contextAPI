import React, {useContext} from 'react';
import { GoogleIdContext } from '../context/store';

export default function Consulting() {
  const [googleId] = useContext(GoogleIdContext);
  return(
     <h1 className='consulting'>{googleId}</h1>
  )
    }

