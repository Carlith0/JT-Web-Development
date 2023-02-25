import Styles from "./ConsultationTextDiv.module.scss";
type Content = {
    id: any;
    heading: String;
    text: String;
  };
function TextDiv(props:any){
    const contents = props.contents;
    return(
        <div>
            {contents.map((content:Content)=>(
                <div className={Styles.Description}>
                    <h5>{content.heading}</h5>
                    <p>{content.text}</p>
                   <hr />
                </div>
            ))}
        </div>
    )
    
}
export default TextDiv;
