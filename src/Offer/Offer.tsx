import React from "react";
import Styles from "./Offer.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Offer() {
  const [block, openBlock] = useState(0);
  if (block === 4) {
    openBlock(0);
  }

  return (
    <div className={Styles.Offer} id="offer">
      {block === 0 ? (
        <>
          <main>
            <hr />
            <h5
              onClick={() => {
                openBlock(1);
              }}
            >
              UI / UX Design
            </h5>
            <h5
              onClick={() => {
                openBlock(2);
              }}
            >
              Advertising Page
            </h5>
            <h5
              onClick={() => {
                openBlock(3);
              }}
            >
              Complex app
            </h5>
          </main>
        </>
      ) : block === 1 ? (
        <>
          <main
            className={Styles.Design}
            onClick={() => {
              openBlock(2);
            }}
          >
            <motion.h1
              variants={fadeIn("left", 0.3, 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              UI / UX Design
            </motion.h1>
            <div className={Styles.HrHolder}>
              <motion.hr
                variants={fadeIn("", 0.1, 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              />
              <motion.p
                variants={fadeIn("", 1.2, 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Next
              </motion.p>
            </div>
            <div className={Styles.Description}>
              <motion.p
                variants={fadeIn("right", 0.6, 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Modyfikacje działających stron <br /> i projektów graficznych
              </motion.p>
              <br />
              <motion.p
                variants={fadeIn("right", 0.8, 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Tworzenie nowego wizerunku <br /> marki oraz logotypu
              </motion.p>
              <br />
              <motion.p
                variants={fadeIn("right", 1, 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Projektowanie wyglądu aplikacji <br /> oraz stron internetowych
              </motion.p>
            </div>
          </main>
        </>
      ) : block === 2 ? (
        <>
          <div
            className={Styles.Page}
            onClick={() => {
              openBlock(3);
            }}
          >
            <motion.h1
              variants={fadeIn("left", 0.3, 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Advertising Page
            </motion.h1>
            <div className={Styles.HrHolder}>
              <motion.hr
                variants={fadeIn("", 0.1, 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              />
              <motion.p
                variants={fadeIn("", 1.2, 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Next
              </motion.p>
            </div>
            <div className={Styles.Description}>
              <motion.p
                variants={fadeIn("right", 0.6, 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Modyfikacje działających stron <br /> i projektów graficznych
              </motion.p>
              <br />
              <motion.p
                variants={fadeIn("right", 0.8, 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Tworzenie nowego wizerunku <br /> marki oraz logotypu
              </motion.p>
              <br />
              <motion.p
                variants={fadeIn("right", 1, 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Projektowanie wyglądu aplikacji <br /> oraz stron internetowych
              </motion.p>
            </div>
          </div>
        </>
      ) : block === 3 ? (
        <>
          <main
            className={Styles.App}
            onClick={() => {
              openBlock(0);
            }}
          >
            <motion.h1
              variants={fadeIn("left", 0.3, 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Complex App
            </motion.h1>
            <div className={Styles.HrHolder}>
              <motion.hr
                variants={fadeIn("", 0.1, 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              />
              <motion.p
                variants={fadeIn("", 1.2, 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Back to offer
              </motion.p>
            </div>
            <div className={Styles.Description}>
              <motion.p
                variants={fadeIn("right", 0.6, 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Modyfikacje działających stron <br /> i projektów graficznych
              </motion.p>
              <br />
              <motion.p
                variants={fadeIn("right", 0.8, 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Tworzenie nowego wizerunku <br /> marki oraz logotypu
              </motion.p>
              <br />
              <motion.p
                variants={fadeIn("right", 1, 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Projektowanie wyglądu aplikacji <br /> oraz stron internetowych
              </motion.p>
            </div>
          </main>
        </>
      ) : null}
    </div>
  );
}

export default Offer;
