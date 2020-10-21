import React, { useState, useEffect } from 'react';
import fire from "./fire";
import Login from "./login";
import Hero from "./hero";
import './App.css';

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [phone, setPhone] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () => {
    console.log(email,phone);
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handlesSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        // clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener();
  }, []);



  const phoneLogin = () => {
    clearErrors();
    console.log("phonenumber",phone);
  };

  return (
    <div className="App">
      {user ? (
        <Hero email={email} phone={phone} />
      ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handlesSignup={handlesSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            clearInputs={clearInputs}
            phoneLogin={phoneLogin}
            phone={phone}
            setPhone={setPhone}
          />
        )}


    </div>
  );
}


export default App;
