import Styles from "./ConsultationTextDiv.module.scss";
type ConsultationTextDivProps = {
	heading: String;
    text: String;
};
function ConsultationTextDiv({heading}:ConsultationTextDivProps,{text}:ConsultationTextDivProps){
    return(
        <div className={Styles.ConsultationTextDiv}>
            <h5>{heading}</h5>
                <div className={Styles.Content}>
                
                    <p>{text}</p>

                </div>

            
        </div>
    )
}
export default ConsultationTextDiv;
