import ProcesConsultation from "./ProcesConsultation";
import ProcesProject from "./ProcesProject";
import ProcesRealization from "./ProcesRealization";

function Proces() {
  return (
    <div className="Proces" id="proces">
      <ProcesConsultation></ProcesConsultation>
      <ProcesProject></ProcesProject>
      <ProcesRealization></ProcesRealization>

    </div>
  );
}

export default Proces;
