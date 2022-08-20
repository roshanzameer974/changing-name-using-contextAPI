import '../../App.css';
import React, {useContext} from 'react';
import { GoogleIdContext } from '../context/store';

export default function Products() {
  const [googleId] = useContext(GoogleIdContext);
  return(
     <h1 className='marketing'>{googleId}</h1>
  )
    }

