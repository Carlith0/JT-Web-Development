import React, { Key } from "react";
import Styles from "./Projects.module.scss";
import { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Intersection } from "@splidejs/splide-extension-intersection";

function Projects() {
  const [block, OpenBlock] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Projekt numer jeden",
      klient: "Przykładowy",
      img: "../../img/projects/projekt1.png",
      opis: "Projekt zakładał stworzenie reklamującej strony internetowej dla Centrum Rehabilitacji. Efekt został osiągnięty, po tygodniowej pracy",
    },
    {
      id: 2,
      title: "Projekt numer dwa",
      klient: "Centrum Rehabilitacji",
      img: "../../img/projects/projekt2.png",
      opis: "Projekt zakładał stworzenie reklamującej strony internetowej dla Centrum Rehabilitacji. Efekt został osiągnięty, po tygodniowej pracy",
    },
    {
      id: 3,
      title: "Projekt numer trzy",
      klient: "JT web",
      img: "../../img/projects/projekt3.png",
      opis: "Projekt zakładał stworzenie reklamującej strony internetowej dla Centrum Rehabilitacji. Efekt został osiągnięty, po tygodniowej pracy",
    },
    {
      id: 4,
      title: "Projekt czwarty",
      klient: "Motorola",
      img: "../../img/projects/projekt4.png",
      opis: "Projekt zakładał stworzenie reklamującej strony internetowej dla Centrum Rehabilitacji. Efekt został osiągnięty, po tygodniowej pracy",
    },
    {
      id: 5,
      title: "Piąty projekt",
      klient: "BodyHouse",
      img: "../../img/projects/projekt5.png",
      opis: "Projekt zakładał stworzenie reklamującej strony internetowej dla Centrum Rehabilitacji. Efekt został osiągnięty, po tygodniowej pracy",
    },
    {
      id: 6,
      title: "Projekt szósty",
      klient: "Klient JT Web",
      img: "../../img/projects/projekt6.png",
      opis: "Projekt zakładał stworzenie reklamującej strony internetowej dla Centrum Rehabilitacji. Efekt został osiągnięty, po tygodniowej pracy",
    },
  ];

  return (
    <div className={Styles.Projects} id="projects">
      {block === 0 ? (
        <>
          <div className={Styles.Title}>
            <h1>Projects</h1>
          </div>
          <div className={Styles.Slider}>
            <Splide
              options={{
                width: "90vw",
                height: "40vh",
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "5rem",
                easing: "ease = cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              {projects.map((project) => {
                return (
                  <SplideSlide>
                    <div className={Styles.Projekt} key={project.id}>
                      <img src={project.img} alt={project.title} />
                      <div className={Styles.Description}>
                        <p>
                          <strong>Tytuł</strong> <br /> {project.title}
                        </p>
                        <button
                          onClick={() => {
                            OpenBlock(project.id + 1);
                          }}
                        >
                          Otwórz projekt
                        </button>
                      </div>
                    </div>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
          <div className={Styles.Scroll}>
            <img
              src="../../img/homeArrow.svg"
              alt="arrow"
              className={Styles.LeftArrow}
            />
            <p>Scroll</p>
            <img
              src="../../img/homeArrow.svg"
              alt="arrow"
              className={Styles.RightArrow}
            />
          </div>
        </>
      ) : (
        <div className={Styles.ActiveProject}>
          <motion.div
            className={Styles.ActiveBack}
            onClick={() => {
              OpenBlock(0);
            }}
            variants={fadeIn("", 1.5, 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src="../../img/homeArrow.svg"
              alt="arrow"
              className={Styles.LeftArrow}
            />
            <p>Back to offer</p>
          </motion.div>
          <motion.img
            src={projects[block - 2].img}
            alt={projects[block - 2].title}
            className={Styles.ActiveImage}
            variants={fadeIn("right", 0.1, 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          />
          <div className={Styles.ActiveDescription}>
            <motion.p
              variants={fadeIn("left", 0.3, 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <strong>Tytuł</strong> <br /> {projects[block - 2].title}
            </motion.p>
            <motion.p
              variants={fadeIn("left", 0.4, 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <strong>Klient</strong> <br /> {projects[block - 2].klient}
            </motion.p>
            <motion.p
              variants={fadeIn("left", 0.5, 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <strong>Opis</strong> <br /> {projects[block - 2].opis}
            </motion.p>
            <motion.hr
              variants={fadeIn("left", 0.6, 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            />
            <motion.div
              className={Styles.ActiveIcons}
              variants={fadeIn("left", 0.7, 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <img src="../../img/projects/icons/figma.svg" alt="figma" />
              <img src="../../img/projects/icons/javascript.svg" alt="js" />
              <img src="../../img/projects/icons/typescript.svg" alt="ts" />
              <img src="../../img/projects/icons/css.svg" alt="css" />
              <img src="../../img/projects/icons/html.svg" alt="html" />
              <img src="../../img/projects/icons/react.svg" alt="react" />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
