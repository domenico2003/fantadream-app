import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../logo.jpg";
const MyNavBar = () => {
  let location = useLocation();

  return (
    <>
      <Navbar
        variant="light"
        bg="light
      "
        expand="sm"
        sticky="top"
        className="shadow "
      >
        <Container fluid className="d-flex flex-column flex-sm-row">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Fanta<span className="text-primary">Dream</span>
          </Navbar.Brand>

          <Nav className="ms-auto ms-sm-0 me-auto">
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active fw-bold text-primary" : ""
              } `}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/regolamento"
                  ? "active fw-bold text-primary"
                  : ""
              } `}
              to={"/regolamento"}
            >
              regolamento
            </Link>
            <Link
              className={`nav-link ${
                location.pathname === "/squadre"
                  ? "active fw-bold text-primary"
                  : ""
              } `}
              to={"/squadre"}
            >
              squadre
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
