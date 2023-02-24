import React from "react";
import Styles from "./HomePage.module.scss"
function Homepage() {
  return (
    <div className={Styles.HomePage}>
      <header>
        <div className={Styles.Name}>
          <h1>JT WEB.</h1>
          <h5>DEVELOPMENT</h5>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>LET’s BUILD YOUR WEBSIDE</h1>
      </main>
    </div>
  );
}

export default Homepage;