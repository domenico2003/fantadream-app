import { useNavigate } from "react-router-dom";

const SingolaSquadra = ({ sq, indice }) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="text-center shadow p-3 border border-1 border-secondary transazione">
        <div onClick={() => navigate("/detail/" + indice)} className="point">
          <span className="fw-bold fs-4">{sq.nomeSquadra} </span>
          <smal className="text-primary text-decoration-underline">
            {sq.fondatore}
          </smal>
        </div>
        <p className="m-0">{sq.email}</p>
        <span className="fw-bold">crediti disponibili: </span>
        <span
          style={
            sq.creditiDisponibili > 100 ? { color: "green" } : { color: "red" }
          }
        >
          {sq.creditiDisponibili}
        </span>
        <hr />
        <div className="d-flex justify-content-evenly">
          <span>
            <span className="portieri" style={{ color: "darkgreen" }}>
              P
            </span>
            <span> {sq.portieri.length}</span>
          </span>
          <span>
            <span className="difensori" style={{ color: "darkblue" }}>
              D
            </span>
            <span> {sq.difensori.length}</span>
          </span>
          <span>
            <span className="centrocampisti" style={{ color: "darkorange" }}>
              C
            </span>
            <span> {sq.centrocampisti.length}</span>
          </span>
          <span>
            <span className="attaccanti" style={{ color: "darkred" }}>
              A
            </span>
            <span> {sq.attaccanti.length}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default SingolaSquadra;
