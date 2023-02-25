import ProcesConsultation from "./ProcesConsultation";
import KonsultacjaMenu from "./ConsultationMenu";
function Proces() {
  return (
    <div className="Proces" id="proces">
      <KonsultacjaMenu></KonsultacjaMenu>
      <ProcesConsultation></ProcesConsultation>
    </div>
  );
}

export default Proces;
