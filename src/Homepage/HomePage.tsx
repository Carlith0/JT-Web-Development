import React from "react";
import Styles from "./HomePage.module.scss"
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Homepage() {
  const [open, setOpen] = useState(false);

  return (
    <div className={Styles.HomePage} id="home">
      <header>
        <motion.div
          variants={fadeIn("right", 0.3,0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className={Styles.Name}
        >
          <h1>JT WEB.</h1>
          <h4>DEVELOPMENT</h4>
        </motion.div>
        <nav>
          <motion.ul
            variants={fadeIn("left", 0.5,0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </motion.ul>
        </nav>
        <img
          className={Styles.Hamburger}
          src="../../img/menu.png"
          alt="menu"
          onClick={() => setOpen(true)}
        />
      </header>

      <main>
        <motion.h1
          variants={fadeIn("down", 0.9,0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <TypeAnimation
            sequence={[
              "Let's build your Website",
              2000,
              "Advertise your business",
              2000,
              "Level up your Apperance",
              2000,
              "Push it to the limit with Us",
              2000,
            ]}
            speed={70}
            wrapper="span"
            repeat={0}
            cursor={false}
          />
          .
        </motion.h1>
      </main>

      <motion.p
        variants={fadeIn("", 4,0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className={Styles.Start}
      >
        <a href="#proces">Click to start</a>
      </motion.p>
      <motion.img
        variants={fadeIn("", 4,0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className={Styles.Arrow}
        src="../../img/homeArrow.svg"
        alt="arrow"
      />
      {open ? (
        <div className={Styles.MobileMenu}>
          <div className={Styles.Empty} onClick={() => setOpen(false)}></div>
          <div className={Styles.MobileNav}>
            <img
              className={Styles.CloseImage}
              src="/../../img/close.svg"
              alt="close"
              onClick={() => setOpen(false)}
            />
            <motion.ul
              variants={fadeIn("", 0.2,0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </motion.ul>
            <motion.div
              className={Styles.SocialLinks}
              variants={fadeIn("", 0.4,0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <p>Tu nas znajdziesz</p>
              <hr />
              <div>
                <img src="../../img/facebook.svg" alt="facebook" />
                <img src="../../img/github.svg" alt="facebook" />
                <img src="../../img/linkedin.svg" alt="facebook" />
              </div>
            </motion.div>
          </div>
        </div>
      ) : null}
      <div className={Styles.BackgroundBlur} />
    </div>
  );
}

export default Homepage;