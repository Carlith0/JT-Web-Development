import Styles from "./Procesess.module.scss";
import TextDiv from "./TextDiv";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function ProcesConsultation() {
  const contents = [{
      id:1,
      heading: "Czego używamy do projektowania?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
      hcolor: "Black",
      pcolor: "#404040",
  },     
  {
  id:2,
  heading: "Co wyróżnia nasze projekty?",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
  hcolor: "Black",
  pcolor: "#404040",  
},     
];

  return (

    <div id="Project" className={Styles.Processes} style={{backgroundColor: "#F9F9F9"}} >
      <div className={Styles.ProjectMenu}>
        <a href="#Consultation" >01 - KONSULTACJA</a><a href="#Project" className={Styles.Current}>02 - PROJEKT WIZUALNY</a><a href="#Realization">03 - REALIZACJA</a>
      </div>
      <div className={Styles.Wrapper} style={{backgroundColor: "#F9F9F9"}}>
        <motion.div
                variants={fadeIn("right", 0.3, 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className={Styles.Left}
                >
           <img src={"../../img/Project.png"} alt="businessmen" />
        </motion.div>
        <div className={Styles.Right}>
          <TextDiv contents={contents}></TextDiv>
          <motion.div
            variants={fadeIn("left", 0.3, 0.6)}
            initial="hidden"
            whileInView={"show"}
          >
          <button className={Styles.ProjectButton}><a href="#contact">Start now</a></button>
          </motion.div>
        </div>
      </div>
      
    </div>
    
  );
}

export default ProcesConsultation;
