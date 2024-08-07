import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CarWidget';

export const NavBar = () => (
<>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">E-Commerce Goku</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Perros</Nav.Link>
                <Nav.Link href="#pricing">Gatos</Nav.Link>
            </Nav>
        </Container>
        <CartWidget />
    </Navbar>      
</>
);



