import { type } from "os";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

type TBrand = {
  brand: string;
};
const MyNav = ({ brand }: TBrand) => {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>{brand}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/">
            <div
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </div>
          </Link>
          <Link to="/menu">
            <div
              className={
                location.pathname === "/menu" ? "nav-link active" : "nav-link"
              }
            >
              Menu
            </div>
          </Link>
          <Link to="/reservations">
            <div
              className={
                location.pathname === "/reservations"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Reservation
            </div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
