import React, { useState } from 'react';
import "../Styles/signin.css"

function SignInForm() {
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
      <form className="fullform">
        <div className="form-body">
          <h2 className='name'>Log-In</h2>
          <input
            type="email"
            autoComplete='current-email'
            placeholder="Email"
            className='form_input'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete='on'
            placeholder="Password"
            className='form_input'
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="cont_button">
            <div className='form_button' onClick={submit}>  Login</div>
            <div className='form_button1' onClick={submit}> Login with Google</div> <br />
            </div>
            <div className='form_button2' onClick={submit}> Do you want an account? Sign up here!</div>
          
        </div>
      </form>
    </>
  );
};

export default SignInForm 
