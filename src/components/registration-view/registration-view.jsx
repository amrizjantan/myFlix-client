import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './registration-view.scss';


export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ Birthday, setBirthday] = useState('');
  


 // Modify state of MainView to be registered and logged in with new user
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(username, password,email, Birthday);
  props.onRegistration(username);
};

return(
  <div>
  <h2>Registration</h2>
  <form>
    <label>
      Username:
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
    </label>
    <br></br>
    <label>
      Password:
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
    </label>
    <br></br>
    <label>
      Email:
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
    </label>
    <br></br>
    <label>
      Birthday:
      <input type="date" value={Birthday} onChange={e => setBirthday(e.target.value)} />
    </label>
    <br></br>
    <button type="registerButton" onClick={handleSubmit}>Register</button>
  </form>
  </div>
);
}



