import Styles from "./Procesess.module.scss";
import TextDiv from "./TextDiv";
function ProcesConsultation() {
  const contents = [{
      id:1,
      heading: "Jak Wyglądają nasze konsultacje?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
  },     
  {
  id:2,
  heading: "Na co zwracamy szczególną uwagę?",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
  },     
  {
  id:3,
  heading: "Na co zwracamy szczególną uwagę?",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
  },
];

  return (

    <div className={Styles.Processes}>
      <div className={Styles.KonsultacjaMenu}>
        <a href="#" className={Styles.Current}>01 - KONSULTACJA</a><a href="#">02 - PROJEKT WIZUALNY</a><a href="#">03 - REALIZACJA</a>
      </div>
      <div className={Styles.Wrapper}>
        <div className={Styles.Left}>
          <img src={"../../img/Chads.png"} alt="businessmen" />
        </div>
       
        <div className={Styles.Right}>
          <TextDiv contents={contents}></TextDiv>
          <button>Start now</button>

        </div>
      </div>
      
    </div>
    
  );
}

export default ProcesConsultation;
