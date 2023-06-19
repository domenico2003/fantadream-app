import { Col, Container, Row } from "react-bootstrap";
import { squadre } from "../Dati/squadre";
import SingolaSquadra from "./SingolaSquadra";
const Squadre = () => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <p className="fs-2 fw-bold text-center mb-5">
          <span style={{ color: "red" }}>!</span>regole per ogni squadra
          <span style={{ color: "red" }}>!</span>
        </p>
        <Row>
          <Col xs={12} sm={6} className="d-flex flex-column align-items-center">
            <p style={{ color: "red" }} className="fs-3 fw-bold mb-0">
              Crediti
            </p>
            <p className="d-block fw-bold fs-4">600</p>
          </Col>
          <Col xs={12} sm={6} className="d-flex flex-column align-items-center">
            <p style={{ color: "blue" }} className="fs-3 fw-bold mb-0">
              n° giocatori per squadra
            </p>
            <p className="d-block fw-bold fs-4">25</p>
          </Col>
        </Row>
        <p className="fs-3 fw-bold text-center mt-4 mb-5">
          dettaglio n° giocatori per ruolo
        </p>
        <Row>
          <Col
            xs={12}
            sm={6}
            xl={3}
            className="d-flex flex-column align-items-center"
          >
            <p style={{ color: "red" }} className="fs-3 fw-bold mb-0">
              portieri
            </p>
            <p className="d-block fw-bold fs-4">3</p>
          </Col>
          <Col
            xs={12}
            sm={6}
            xl={3}
            className="d-flex flex-column align-items-center"
          >
            <p style={{ color: "blue" }} className="fs-3 fw-bold mb-0">
              difensori
            </p>
            <p className="d-block fw-bold fs-4">8</p>
          </Col>
          <Col
            xs={12}
            sm={6}
            xl={3}
            className="d-flex flex-column align-items-center"
          >
            <p style={{ color: "orange" }} className="fs-3 fw-bold mb-0">
              centrocampisti
            </p>
            <p className="d-block fw-bold fs-4">8</p>
          </Col>
          <Col
            xs={12}
            sm={6}
            xl={3}
            className="d-flex flex-column align-items-center"
          >
            <p style={{ color: "green" }} className="fs-3 fw-bold mb-0">
              attaccanti
            </p>
            <p className="d-block fw-bold fs-4">6</p>
          </Col>
        </Row>
        <p className="fw-bold fs-2 text-center mt-5">squadre partecipanti</p>
        <Row xs={1} sm={2} xl={4} className="mt-5">
          {squadre?.map((sq, index) => (
            <Col className="mb-5">
              <SingolaSquadra sq={sq} indice={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Squadre;
