import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Styles from "./TextDiv.module.scss";
type Content = {
    id: String;
    heading: String;
    text: String;
    hcolor: String;
    pcolor: String;
  };
function TextDiv(props:any){
    const contents = props.contents;
    return(
        <div>
            {contents.map((content:Content)=>(
                <motion.div
                variants={fadeIn("left", 0.3, 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className={Styles.Description}
                >
                    <h5 style={{color: `${content.hcolor}`}}>{content.heading}</h5>
                    <p style={{color: `${content.pcolor}`}}>{content.text}</p>
                    <hr />
                </motion.div>

            ))}
        </div>
    )
}
export default TextDiv;
