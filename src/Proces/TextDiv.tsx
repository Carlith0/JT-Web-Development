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
                <div className={Styles.Description}>
                    <h5 style={{color: `${content.hcolor}`}}>{content.heading}</h5>
                    <p>{content.text}</p>
                   <hr />
                </div>
            ))}
        </div>
    )
}
export default TextDiv;
