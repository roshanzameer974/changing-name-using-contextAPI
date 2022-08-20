import '../../App.css';
import React, {useContext} from 'react';
import { GoogleIdContext } from '../context/store';

export default function ContactUs() {
  const [googleId] = useContext(GoogleIdContext);
  return(
     <h1 className='contact-us'>{googleId}</h1>
  )
    }

