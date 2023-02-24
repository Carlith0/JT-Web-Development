import React from "react";
import Styles from "./HomePage.module.scss"
import { useState } from "react";
function Homepage() {
  const [open, setOpen] = useState(false);

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
        <img
          className={Styles.Hamburger}
          src="../../img/menu.png"
          alt="menu"
          onClick={() => setOpen(true)}
          />
      </header>
      <main>
        <h1>LET’s BUILD YOUR WEBSIDE</h1>
      </main>
      {open ? (<div className={Styles.MobileMenu}>
        <div className={Styles.Empty}></div>
        <div className={Styles.MobileNav}>
          <img
            src="/../../img/close.png"
            alt="close"
            onClick={() => setOpen(false)}
            />
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
       
      </div>) : null}
    </div>
  );
}

export default Homepage;