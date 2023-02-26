import Styles from "./Procesess.module.scss";
import TextDiv from "./TextDiv";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function ProcesConsultation() {
  const contents = [{
      id:1,
      heading: "Jak Wyglądają konsultacja?",
      text: "Konsultacja może odbywać się na różne sposoby, w tym osobiście, przez telefon, e-mail lub czat. Omawiamy kwestie takie jak przeznaczenie strony,  preferencje klienta oraz cene projektu.",
      hcolor: "white",
    },     
  {
  id:2,
  heading: "Na co zwracamy szczególną uwagę?",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
  hcolor: "white",
},     
  {
  id:3,
  heading: "Na co zwracamy szczególną uwagę?",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
  hcolor: "white",
},
];

  return (

    <div id="Consultation" className={Styles.Processes}>
      <motion.div
        variants={fadeIn("top", 0.3, 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className={Styles.ConsultationMenu}
      >
        <a href="#Consultation" className={Styles.Current}>01 - KONSULTACJA</a><a href="#Project">02 - PROJEKT WIZUALNY</a><a href="#Realization">03 - REALIZACJA</a>
      </motion.div>
      <div className={Styles.Wrapper}>
        <motion.div
        variants={fadeIn("right", 0.3, 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
        className={Styles.Left}
        >
          <img src={"../../img/Chads.png"} alt="businessmen" />
        </motion.div>
        <div className={Styles.Right}>
          <TextDiv contents={contents}></TextDiv>
            <motion.div
            variants={fadeIn("left", 0.3, 0.6)}
            initial="hidden"
            whileInView={"show"}
            >
            <button className={Styles.ConsultationButton}><a href="#contact">Start now</a></button>
            </motion.div>
        </div>
      </div>
      
    </div>
    
  );
}

export default ProcesConsultation;
