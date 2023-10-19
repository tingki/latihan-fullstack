import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

// icons
import { HiHome,HiArrowRightOnRectangle } from 'react-icons/hi2';
import { MdRollerSkating,MdOutlineAirlineSeatLegroomExtra } from 'react-icons/md'
import {BsPersonHeart,BsWatch,BsCart4,BsCaretDownFill,BsFillFilePersonFill} from 'react-icons/bs'


function BasicExample() {
    return (
        <Navbar expand="lg"  bg='dark' data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home"><img src='/img/logo.png' width={200} height={65} id='img-logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar-home">
                        <Nav.Link href="#home" className='px-4  '><HiHome className='mb-1 bg-outline-danger' /> &nbsp;Home</Nav.Link>
                        <Nav.Link href="#link" className='px-4'><BsPersonHeart className='mb-1 bg-outline-danger' /> &nbsp;Baju</Nav.Link>
                        <Nav.Link href="#link" className='px-4'><MdOutlineAirlineSeatLegroomExtra className='mb-1 bg-outline-danger' /> &nbsp;Celana</Nav.Link>
                        <Nav.Link href="#link" className='px-4'><MdRollerSkating className='mb-1 bg-outline-danger' /> &nbsp;Sepatu</Nav.Link>
                        <Nav.Link href="#link" className='px-4'><BsWatch className='mb-1 btn-outline-primary' /> &nbsp;Aksesoris</Nav.Link>
                        
                    </Nav>
                    <Nav className="me-1 navbar-home">
                        <Nav.Link href="#home" className='px-4  '><BsCart4 className='mb-1 bg-outline-danger' />&nbsp;Cart</Nav.Link>
                        <Nav.Link href="#link" className='px-4'><BsFillFilePersonFill/>&nbsp;Profile</Nav.Link>
                        <Nav.Link href="logout" className='px-4'><HiArrowRightOnRectangle/>&nbsp;Logout</Nav.Link>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;