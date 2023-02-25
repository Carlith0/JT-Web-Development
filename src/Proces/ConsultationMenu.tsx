import Styles from "./ConsultationMenu.module.scss";
function KonsultacjaMenu() {
  return (
    <div className={Styles.KonsultacjaMenu}>
      <a href="#" className={Styles.Current}>01 - KONSULTACJA</a><a href="#">02 - PROJEKT WIZUALNY</a><a href="#">03 - REALIZACJA</a>
    </div>
  );
}

export default KonsultacjaMenu;
