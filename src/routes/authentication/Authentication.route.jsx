import React, { useState, useRef } from 'react';
import ScrollingBar from '../Category/ScrollingBar/ScrollingBar.component';
import SignInForm from '../../components/SignInForm/SignInForm.component';
import SignUpForm from '../../components/SignUpForm/SignUpForm.component';
import './Authentication.styles.css';

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const containerRef = useRef(null);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <ScrollingBar />
      <div className="body">
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} ref={containerRef}>
          <div className="form-container sign-up-container">
            <SignUpForm />
          </div>
          <div className="form-container sign-in-container">
            <SignInForm />
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Bentornato!</h1>
                <p>
                  Per restare connesso con noi, effettua il login con i tuoi dati personali
                </p>
                <button className="ghost" id="signIn" onClick={toggleForm}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Benvenuto!</h1>
                <p>
                  Per restare connesso con noi, effettua la registrazione con i tuoi dati personali
                </p>
                <button className="ghost" id="signUp" onClick={toggleForm}>Sign Up</button>
              </div>
            </div>
          </div>
          <button className="mobile-toggle" onClick={toggleForm}>
            <span>{isSignUp ? 'Login' : 'SignUp'}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Authentication;

