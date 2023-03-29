// import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io";

function NavBar() {
  //     const [isMobile, setIsMobile] = useState()
  //    setsMobile = window.innerWidth <= "990px"

  // //   useMediaQuery('(max-width: 767px)');

  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}
    >
      <Container>
        <div className="mobileBrand">
          <Navbar.Brand href="#">
            <img src="/mainLogo.svg" alt="Logo" style={{ width: "130px" }} />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#" className="text-black">
              Work
            </Nav.Link>
            <Nav.Link href="#" className="text-black">
              About
            </Nav.Link>
            <Nav.Link href="#" className="text-black">
              Contact
            </Nav.Link>
          </Nav>
          <div className="mainBrand">
            <Nav className="justify-content-center ">
              <Navbar.Brand href="#">
                <img
                  src="/mainLogo.svg"
                  alt="Logo"
                  style={{ width: "130px" }}
                />
              </Navbar.Brand>
            </Nav>
          </div>

          <Nav className="ms-auto">
              <Nav.Link href="#" className="text-black">
                <AiOutlineTwitter size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="text-black">
                <FaFacebookF size={20}/>
              </Nav.Link>
              <Nav.Link href="#" className="text-black">
                <AiOutlineInstagram size={20}/>
              </Nav.Link>
              <Nav.Link href="#" className="text-black">
                <FaLinkedin size={20}/>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
