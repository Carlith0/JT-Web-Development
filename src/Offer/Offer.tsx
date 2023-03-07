import React from "react";
import Styles from "./Offer.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Offer() {
  const [block, openBlock] = useState(0);
  
  return (
    <div className={Styles.Offer} id="offer">
      <main>
        <div className={Styles.Title}>
          <h1>Co oferujemy?</h1>
        </div>
        <div className={Styles.Content}>
          <div className={Styles.Blocks}>
            <div
              className={Styles.Design}
              onClick={() => {
                block === 1 ? openBlock(0) : openBlock(1);
              }}
            >
              <h4>UI / UX Design</h4>
            </div>
            <div
              className={Styles.App}
              onClick={() => {
                block === 2 ? openBlock(0) : openBlock(2);
              }}
            >
              <h4>Complex app</h4>
            </div>
            <div
              className={Styles.Page}
              onClick={() => {
                block === 3 ? openBlock(0) : openBlock(3);
              }}
            >
              <h4>Advertising page</h4>
            </div>
          </div>

          {block === 1 ? (
            <motion.div
              className={Styles.Descriptions}
              variants={fadeIn("left", 0, 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <div className={Styles.DesignDescription}>
                <div className={Styles.DesignDescriptionContent}>
                  <h5>UI/UX Design</h5>
                  <hr />
                  <p>Modyfikacje działających stron i projektów graficznych</p>
                  <p>Tworzenie nowego wizerunku marki oraz logotypu</p>
                  <p>
                    Projektowanie wyglądu aplikacji, stron internetowych, gier
                  </p>
                </div>
              </div>
            </motion.div>
          ) : block === 2 ? (
            <motion.div
              className={Styles.Descriptions}
              variants={fadeIn("left", 0, 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <div className={Styles.AppDescription}>
                <div className={Styles.AppDescriptionContent}>
                  <h5>Complex app</h5>
                  <hr />
                  <p>Modyfikacje działających stron i projektów graficznych</p>
                  <p>Tworzenie nowego wizerunku marki oraz logotypu</p>
                  <p>
                    Projektowanie wyglądu aplikacji, stron internetowych, gier
                  </p>
                </div>
              </div>
            </motion.div>
          ) : block === 3 ? (
            <motion.div
              className={Styles.Descriptions}
              variants={fadeIn("left", 0, 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <div className={Styles.PageDescription}>
                <div className={Styles.PageDescriptionContent}>
                  <h5>Advertising page</h5>
                  <hr />
                  <p>Modyfikacje działających stron i projektów graficznych</p>
                  <p>Tworzenie nowego wizerunku marki oraz logotypu</p>
                  <p>
                    Projektowanie wyglądu aplikacji, stron internetowych, gier
                  </p>
                </div>
              </div>
            </motion.div>
          ) : null}
        </div>
      </main>
      <div className={Styles.ForProjects}>
        <div className={Styles.ForProjectsTitle}>
          <h4>For Projects</h4>
          <div className={Styles.HrHolder}>
            <hr />
          </div>
        </div>
        <button type="button" onClick={() => (location.href = "#projects")}>
          Look here
        </button>
      </div>
      <div className={Styles.BackgroundBlur}></div>
    </div>
  );
}

export default Offer;
