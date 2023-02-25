import React from "react";
import ProcesConsultation from "./ProcesConsultation";
import KonsultacjaMenu from "./ConsultationMenu";
function Proces() {
  return (
    <div className="Proces">
      <KonsultacjaMenu></KonsultacjaMenu>
      <ProcesConsultation></ProcesConsultation>
    </div>
  );
}

export default Proces;
