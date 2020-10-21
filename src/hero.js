import React from 'react';
import fire from "./fire";
import './hero.css';
const Hero = (props) => {
  const {email, phone} =props;
  console.log("Email____",email)
  console.log("Phone_____",phone);
  const handleLogout = () => {

    console.log("********************");
    fire.auth().signOut().then(function () {
      // Sign-out successful.
    })
      .catch(function (error) {
        // An error happened
      });
  };
  const paymentCheck = (event) => {
    event.preventDefault();

    console.log("PAYMENT DONE");
  };

  return (
    <div>
      <div className="hero">
        <nav>
 {phone=="" ?(<h2>Welcome:- {email}</h2>):(<h2>Welcome:- {phone}</h2>)}
          <button onClick={handleLogout}>Logout</button>
        </nav>
        <div class="payment-container">
          <div class="payment-form__header"><h2>Payment Method</h2></div>
          <div>

            <form id="payment-form" onSubmit={paymentCheck}>

              <div class="payment-form__container">
                <label for="card-number">Card Number</label>
                <input type="text" class="payment_form__input" id="card-number" maxlength="16" />
              </div>

            <div>
              <div class="payment_form__item" id="card-expiration__month">
                <label for="card-expiration-month">Month</label>
                <select name="card-expiration-month" id="card-expiration-month">
                  <option value="">MM</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>

              <div class="payment_form__item" id="card-expiration__year">
                <label for="card-expiration-year">Year</label>
                <select name="card-expiration-year" id="card-expiration-year">
                  <option value="">YY</option>
                  <option value="2016">16</option>
                  <option value="2017">17</option>
                  <option value="2018">18</option>
                  <option value="2019">19</option>
                  <option value="2020">20</option>
                  <option value="2021">21</option>
                  <option value="2022">22</option>
                  <option value="2023">23</option>
                  <option value="2024">24</option>
                  <option value="2025">25</option>
                  <option value="2026">26</option>
                  <option value="2027">27</option>
                  <option value="2028">28</option>
                  <option value="2029">29</option>
                  <option value="2030">30</option>
                  <option value="2031">31</option>
                </select>
              </div>
              </div>
            
              <div class="payment_form__item" id="cvc-container">
                <label for="security-code">Security Code</label>
                <input type="password" class="payment_form__input" id="security-code" maxlength="3" />
                <span class="tooltip tooltip-top" data-tooltip="3-digit code on back of visa/mc or 4-digit code on front of amex">
                  <i id="cvc" class="fa fa-question-circle"></i>
                </span>
              </div>
              <input type="submit" class="button" value="Pay Now" />
            </form>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;