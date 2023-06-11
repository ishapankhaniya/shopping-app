import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Navbar className="main">
        <Container>
          <Navbar.Brand className="text-white">Shoppiee...</Navbar.Brand>
          <Nav className=" titles">
            <Link to="/" className="links-nav">
              HOME
            </Link>
            <Link to="/about" className="links-nav">
              ABOUT
            </Link>
            <Link to="/product" className="links-nav">
              PRODUCT
            </Link>

            <Link to="/login" className="links-nav">
              LOGIN
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
