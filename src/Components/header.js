import React from 'react'
import{Navbar,Container,Nav,FormControl,Form,Button,NavDropdown,Offcanvas,Card} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'


export default function UniversityPresident() {
  return (
    <div>
         <Navbar  expand={false} bg="dark" variant="dark">
        <Container>
            <Navbar.Brand >Abc University</Navbar.Brand>
            <Navbar.Text >
                Welcome to our Voting App
            </Navbar.Text>
            <NavbarToggle aria-controls="offcanvasNavbar"/>
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
         <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">More Info</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          
          <NavDropdown title="Election Positions" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="/president">University President</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/vicepresident">Vice President</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/secretary">University seceretary general</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/deputy">Deputy secretary general</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/counciltreasurer">University council treasurer</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/council">Student Council</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/spokesperson">Spokesperson</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Admin Privileges" id="offcanvasNavbarDropdown1">
            <NavDropdown.Item href="/createpoll">Create Poll</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/viewpoll">View Poll</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/register">Register Users</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="njengaleo@gmail.com">Contact us</Nav.Link>
          


        </Nav>
        
      </Offcanvas.Body>
      </Navbar.Offcanvas>
        </Container>
        </Navbar>
        </div>
  )
}
