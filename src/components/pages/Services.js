import React, {useContext} from 'react';
import '../../App.css';
import { GoogleIdContext } from '../context/store';

const Services = () => {
  const [googleId] = useContext(GoogleIdContext);
  return(
     <h1 className='services'>{googleId}</h1>
  )
    }



export default Services