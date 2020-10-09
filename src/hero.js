import React from 'react';
import fire from "./fire";
const Hero = () => {
    const handleLogout = () => {

        console.log("********************");
        fire.auth().signOut().then(function() {
          // Sign-out successful.
        })
        .catch(function(error) {
          // An error happened
        });
      };

    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero;