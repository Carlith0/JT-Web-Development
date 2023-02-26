import Styles from "./Procesess.module.scss";
import TextDiv from "./TextDiv";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function ProcesRealization() {
  const contents = [{
    id:1,
    heading: "W jaki sposób realizujemy zamówienia?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
    hcolor: "white",
    pcolor: "font-color",  
  },     
  {
    id:2,
    heading: "Ile średnio potrzebujemy na realizację projektu?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
    hcolor: "white",
    pcolor: "font-color",  
  },     
  {
    id:3,
    heading: "Na co zwracamy szczególną uwagę?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
    hcolor: "white",
    pcolor: "font-color",    
  },
];

  return (
    <div id="Realization" className={Styles.Processes}>
      <div className={Styles.RealizationMenu}>
        <a href="#Consultation" >01 - KONSULTACJA</a><a href="#Project">02 - PROJEKT WIZUALNY</a><a href="#Realization" className={Styles.Current}>03 - REALIZACJA</a>
      </div>
      <div className={Styles.Wrapper}>
        <motion.div
          variants={fadeIn("right", 0.3, 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className={Styles.Left}
          >
          <img src={"../../img/Realization.png"} alt="businessmen" />
        </motion.div>
      
        <div className={Styles.Right}>
          <TextDiv contents={contents}></TextDiv>
          <motion.div
            variants={fadeIn("left", 0.3, 0.6)}
            initial="hidden"
            whileInView={"show"}
            >
            <button className={Styles.RealizationButton}><a href="#contact">Start now</a></button>
          </motion.div>
        </div>
      </div>
    </div>
    
  );
}

export default ProcesRealization;
