import Styles from "./Procesess.module.scss";
import TextDiv from "./TextDiv";
function ProcesConsultation() {
  const contents = [{
      id:1,
      heading: "Jak Wyglądają konsultacja?",
      text: "Konsultacja może odbywać się na różne sposoby, w tym osobiście, przez telefon, e-mail lub czat. Omawiamy kwestie takie jak przeznaczenie strony,  preferencje klienta oraz cene projektu.",
      hcolor: "white",
      pcolor: "font-color",
    },     
  {
  id:2,
  heading: "Na co zwracamy szczególną uwagę?",
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
          <button className={Styles.ConsultationButton}>Start now</button>
        </div>
      </div>
      
    </div>
    
  );
}

export default ProcesConsultation;
