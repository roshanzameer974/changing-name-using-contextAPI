import {  useContext } from 'react';
import '../../App.css';
import { GoogleIdContext } from '../context/store';
import './Home.css'


function Home (myProp) {
  const [googleId, setGoogleId] = useContext(GoogleIdContext);
  function nameHandler (e) {
    // dispatch(changeName(e.target.value))
    setGoogleId(e.target.value)
  }
  return (
    
    <div className='home' >
      <input type="text" value={googleId} onChange={nameHandler} name="name"/>{' '}
         <br />
    <p>Text value:{googleId}</p>
         </div>

  )
}

export default Home;