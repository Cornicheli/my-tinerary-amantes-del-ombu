import React, { useState } from 'react';
import './signin.css';

function signinform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      let login = { email, password }
      localStorage.setItem("user", JSON.stringify(login));
    }
  };
  return (
    <>
      <form className="form">
        <div className="form-body">
          <h1 className='title'>MyTinerary</h1>
          <h2 className='title2'>Log-In</h2>
          <input
            type="email"
            autoComplete='current-email'
            placeholder="Email"
            className='form__input'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete='on'
            placeholder="Password"
            className='form__input'
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="submit">
            <button className='submit2' onClick={submit}>Login</button>
            <button className='submit2' onClick={submit}>Login with Google</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default signinform 
