import { Container } from "react-bootstrap";
import { regole } from "../Dati/regole";
import NewRegola from "./NewRegola";
const Regolamento = () => {
  return (
    <>
      <Container className="mt-5">
        <p className="fs-1 text-center mb-5">🚩REGOLAMENTO🚩</p>
        {regole.map((reg) => (
          <NewRegola regola={reg} />
        ))}
      </Container>
    </>
  );
};
export default Regolamento;
