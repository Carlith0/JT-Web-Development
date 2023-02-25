import Styles from "./ProcesConsultation.module.scss";
import ConsultationTextDiv from "./ConsultationTextDiv";
function ProcesConsultation() {
  return (
    <div className={Styles.ProcesConsultation}>
      <div className={Styles.Wrapper}>
        <div className={Styles.Left}>
          <img src={"../../img/Chads.png"} alt="businessmen" />
        </div>
        <div className={Styles.Right}>
          <ConsultationTextDiv heading="Jak Wyglądają nasze konsultacje?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi."></ConsultationTextDiv>
          <div className={Styles.Description}>
            <h5>Jak Wyglądają nasze konsultacje?</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.</p>
          </div>
          <div className={Styles.Description}>
            <h5>Na co zwracamy największą uwagę?</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.</p>
          </div>
          <div className={Styles.Description}>
            <h5>Jak wygląda współpraca z nami?</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum dolor asperiores natus velit, doloremque maxime porro itaque, quia modi est laudantium nobis minus optio, laboriosam animi deleniti fugit eligendi.</p>
          </div>

        </div>
      </div>
      <div className={Styles.KonsultacjaMenu}>
        <a href="#">01 - KONSULTACJA</a><a href="#" className={Styles.Current}>02 - PROJEKT WIZUALNY</a><a href="#">03 - REALIZACJA</a>
      </div>
    </div>
  );
}

export default ProcesConsultation;
