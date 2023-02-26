import ProcesConsultation from "./ProcesConsultation";
import ProcesProject from "./ProcesProject";
import ProcesRealization from "./ProcesRealization";
function Proces() {
  return (
    <div className="Proces" id="proces">
      <ProcesConsultation></ProcesConsultation>
      <hr />
     <ProcesProject></ProcesProject>
     <hr />
     <ProcesRealization></ProcesRealization>
     <hr />

    </div>
  );
}

export default Proces;
