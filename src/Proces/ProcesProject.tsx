import Styles from "./Procesess.module.scss";
import TextDiv from "./TextDiv";
function ProcesConsultation() {
  const contents = [{
      id:1,
      heading: "Czego używamy do projektowania?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
  },     
  {
  id:2,
  heading: "Co wyróżnia nasze projekty?",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
  },     
];

  return (

    <div className={Styles.Processes}>
      <div className={Styles.ProjectMenu}>
        <a href="#" >01 - KONSULTACJA</a><a href="#" className={Styles.Current}>02 - PROJEKT WIZUALNY</a><a href="#">03 - REALIZACJA</a>
      </div>
      <div className={Styles.Wrapper}>
        <div className={Styles.Left}>
          <img src={"../../img/Project.png"} alt="businessmen" />
        </div>
       
        <div className={Styles.Right}>
          <TextDiv contents={contents}></TextDiv>
          <button className={Styles.ProjectButton}>Start now</button>

        </div>
      </div>
      
    </div>
    
  );
}

export default ProcesConsultation;
