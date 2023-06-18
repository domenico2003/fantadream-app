import { useParams } from "react-router-dom";
import { squadre } from "../Dati/squadre";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
const Details = () => {
  const [indice, setIndice] = useState(null);
  const [obj, setObj] = useState(null);

  let params = useParams();

  useEffect(() => {
    let i = parseInt(params.id);
    setIndice(i);
  }, []);
  useEffect(() => {
    if (indice != null) {
      setObj(squadre[indice]);
    }
  }, [indice]);

  return (
    <>
      <Container className="mt-5 shadow-lg p-3 mb-5">
        <p className="fw-bold fs-1 text-center m-0">{obj?.nomeSquadra}</p>
        <p className="fw-bold fs-3 text-center text-primary">
          {obj?.fondatore}
        </p>
        <hr className="border-primary" />
        <p className="mt-5">
          <span className="fw-bold fs-5 text-primary">Email propretario: </span>
          <span className="text-decoration-underline ">{obj?.email}</span>
        </p>
        <p className="mb-5">
          <span className="fw-bold fs-5" style={{ color: "blue" }}>
            crediti disponbili:{" "}
          </span>
          <span className="text-decoration-underline ">
            {obj?.creditiDisponibili}
          </span>
        </p>
        <hr className="border-primary" />
        <p className="fw-bold fs-3 text-center m-0 pt-5 mb-4">SQUADRA</p>
        <p className="ms-5 fs-2 fw-bold" style={{ color: "darkgreen" }}>
          PORTIERI
        </p>
        <div className="d-flex justify-content-between ms-5 me-5">
          <p className="fs-4">NOME</p>
          <p className="fs-4">SPESI</p>
        </div>
        {obj?.portieri.map((por) => (
          <div className="d-flex justify-content-between ms-5 me-5">
            <p>{por.nome}</p>
            <p>{por.creditiDiAcquisto}</p>
          </div>
        ))}
        <p className="ms-5 mt-5 fs-2 fw-bold" style={{ color: "darkblue" }}>
          DIFENSORI
        </p>
        <div className="d-flex justify-content-between ms-5 me-5">
          <p className="fs-4">NOME</p>
          <p className="fs-4">SPESI</p>
        </div>
        {obj?.difensori.map((por) => (
          <div className="d-flex justify-content-between ms-5 me-5">
            <p>{por.nome}</p>
            <p>{por.creditiDiAcquisto}</p>
          </div>
        ))}
        <p className="ms-5 fs-2 mt-5 fw-bold" style={{ color: "darkorange" }}>
          CENTROCAMPISTI
        </p>
        <div className="d-flex justify-content-between ms-5 me-5">
          <p className="fs-4">NOME</p>
          <p className="fs-4">SPESI</p>
        </div>
        {obj?.centrocampisti.map((por) => (
          <div className="d-flex justify-content-between ms-5 me-5">
            <p>{por.nome}</p>
            <p>{por.creditiDiAcquisto}</p>
          </div>
        ))}
        <p className="ms-5 fs-2 mt-5 fw-bold" style={{ color: "darkred" }}>
          ATTACCANTI
        </p>
        <div className="d-flex justify-content-between ms-5 me-5">
          <p className="fs-4">NOME</p>
          <p className="fs-4">SPESI</p>
        </div>
        {obj?.attaccanti.map((por) => (
          <div className="d-flex justify-content-between ms-5 me-5">
            <p>{por.nome}</p>
            <p>{por.creditiDiAcquisto}</p>
          </div>
        ))}
      </Container>
    </>
  );
};
export default Details;
