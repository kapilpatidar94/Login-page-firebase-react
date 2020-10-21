import React from 'react';
import './App.css';
import * as firebase from "firebase/app";


const LoginWithPhone = (props) => {
    const {phone,setPhone,phoneLogin} = props;
    const setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
            'size': 'invisible',
            'callback': function(response) {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              onSignInSubmit();
            }
          });
    }
    const onSignInSubmit = (event) => {
        console.log("*********",phone);
        event.preventDefault();
        setUpRecaptcha();
        var phoneNumber = phone;
        var appVerifier = window.recaptchaVerifier;
        console.log("kakakakka");

        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              var code = window.prompt("Enter OTP");
              confirmationResult
                .confirm(code)
                .then(function (result) {
                // User signed in successfully.
                    var user = result.user;
                    console.log("User LogedIn");
                // ...
                }).catch(function (error) {
                // User couldn't sign in (bad verification code?)
                // ...
                });
            }).catch(function (error) {
              // Error; SMS not sent
              // ...
            });
    }
    return (
       
        <div >
       <form onSubmit={onSignInSubmit}>
        <input 
            type="number" 
            placeholder="+1 321 1234 321"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        <button type="submit">LogIn</button>
        </form>
        <div id="recaptcha-container"></div>

      </div>
    )
}

export default LoginWithPhone;