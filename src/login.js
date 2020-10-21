import React, { useState, useEffect } from 'react';
import './App.css';
import LoginWithPhone from './loginWithPhone';
const Login = (props) => {
    console.log("+++++++",props);
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handlesSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        clearInputs,
        phone,
        setPhone,
        phoneLogin } = props;

        
       
    return (
        <section className="login">
            <div className="loginContainer">
                
                <h3><label>Admin Login</label></h3>
                <label></label>
                <input
                    type="text"
                    placeholder="Enter Admin Email Address"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                            <>
                                <button onClick={handlesSignup}>Sign Up</button>
                                <p>Have an account ? <span onClick={() => {setHasAccount(!hasAccount); clearInputs();}}>Click here </span>
                                to Sign In
                                </p>
                            </>
                        ) : (
                            <>
                                <button onClick={handleLogin}>Sign In</button>
                                <p>Don't have an account ? <span onClick={() => {setHasAccount(!hasAccount);clearInputs();}}>Click here </span>
                                to Sign Up
                                </p>
                            </>
                        )}
                </div>
                <br/>
                {/* <div className="btn" onClick={setSeen()}>
                    <button>New User?</button>
                </div>
                {seen ? <LoginWithPhone toggle={setSeen, seen} /> : null} */}
                <LoginWithPhone
                    phone={phone}
                    setPhone={setPhone}
                    phoneLogin={phoneLogin}/>
            </div>
        </section>
    )
}
export default Login;