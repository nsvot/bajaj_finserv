import React, { useState } from 'react';
import './SignUp.css'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Navbar from '../Home/Nav/Nav';
import { signInWithPopup, GoogleAuthProvider,signInWithRedirect } from "firebase/auth";

const SignUp = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup=(e)=>{
    e.preventDefault();
  }


  const handleGoogle = (e) => {
    // e.preventDefault();

    signInWithRedirect(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  };

  return (
    <div className="signup-container">
      <Navbar/>
      <h1 className="title">HackTheHustle</h1>
      <h2 className="subtitle">Please sign up to access the models</h2>

      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button  type="google-login">Sign Up</button>
        <button onClick={()=>{
        handleGoogle()
      }}>
      Try Google
      </button>
      </form>

      <button>
       <a href="/login">Switch to Log In</a>
      </button>
    </div>
  );
};

export default SignUp;
