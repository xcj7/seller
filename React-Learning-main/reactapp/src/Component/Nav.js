import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import img from "./Image/logo.png";
import AsideNav from './AsideNav';
import Style from "./Style/Navbar.module.css";

export default function Nav() {
  return (
    
    <Navbar className={Style.nav}>
          <AsideNav />
      <Container>
    
        <Navbar.Brand className='brand' href="#home"><img className={Style.img} src={img}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <ul class="navbar-nav justify-content-sm-center mb-3 mb-lg-0">
    
      <li >
        <Link className={Style.button}  to="/home">HOME</Link>
        </li>
        <li>
        <Link className={Style.button}  to="/logout">LOGOUT</Link>
        </li>
        
    
       
      </ul>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

