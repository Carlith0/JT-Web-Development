import Styles from "./Procesess.module.scss";
import TextDiv from "./TextDiv";
function ProcesRealization() {
  const contents = [{
      id:1,
      heading: "W jaki sposób realizujemy zamówienia?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.",
  },     
  {
  id:2,
  heading: "Ile średnio potrzebujemy na realizację projektu?",
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
      <div className={Styles.RealizationMenu}>
        <a href="#" >01 - KONSULTACJA</a><a href="#">02 - PROJEKT WIZUALNY</a><a href="#" className={Styles.Current}>03 - REALIZACJA</a>
      </div>
      <div className={Styles.Wrapper}>
        <div className={Styles.Left}>
          <img src={"../../img/Realization.png"} alt="businessmen" />
        </div>
       
        <div className={Styles.Right}>
          <TextDiv contents={contents}></TextDiv>
          <button className={Styles.RealizationButton}>Start now</button>

        </div>
      </div>
      
    </div>
    
  );
}

export default ProcesRealization;
