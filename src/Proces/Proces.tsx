import ProcesConsultation from "./ProcesConsultation";
import ConsultationMenu from "./ConsultationMenu";
function Proces() {
  return (
    <div className="Proces" id="proces">
      <ConsultationMenu></ConsultationMenu>
      <ProcesConsultation></ProcesConsultation>
    </div>
  );
}

export default Proces;
