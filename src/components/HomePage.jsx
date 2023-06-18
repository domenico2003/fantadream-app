import { Col, Container, Row } from "react-bootstrap";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Container className="mt-5 ">
        <Row className="shadow-lg bg-white">
          <Col xl={4}>
            <img src={logo} alt="logo app" className="img-fluid" />
          </Col>
          <Col xl={8} className="position-relative">
            <div className="text-center">
              <span className="fs-1">Fanta</span>
              <span className="fs-1 text-primary fw-bold text-shadow">
                Dream 💭
              </span>
            </div>
            <p className="mt-5">
              <span className="fw-bold">Benvenuti</span> a tutti, questa è il
              sito <span className="text-decoration-underline">ufficiale</span>{" "}
              di{" "}
              <span className="fw-bold">
                Fanta<span className="text-primary">Dream</span>
              </span>{" "}
              edizione <span className="fw-bold">2023-2024</span>.
            </p>
            <p>
              In questo sito, creato dagli{" "}
              <span className="fw-bold text-decoration-underline">
                admin Domenico e Daniele{" "}
              </span>{" "}
              potrete trovare tutte le informazioni riguardanti il fantacalcio
              come per esempio il{" "}
              <Link
                className="nav-link text-primary text-decoration-underline d-inline"
                to={"/regolamento"}
              >
                regolamento{" "}
              </Link>
              o le
              <Link
                className="nav-link text-primary text-decoration-underline d-inline"
                to={"/squadre"}
              >
                {" "}
                squadre
              </Link>
              .
            </p>
            <p className="pb-5">
              Dopo di questa premessa ti invitiamo a{" "}
              <span className="fw-bold text-decoration-underline">
                leggere attentamente il regolamento
              </span>
              , non infrangerlo e in caso di bisogno scrivere a noi !!!
            </p>
            <p className="position-absolute  bottom-0 end-0 me-4 ">
              {" "}
              da Domenico e Daniele
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
