import React from 'react';
import Container from 'react-bootstrap/Container';
import  Nav  from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
import brandLogo from '../assets/logo-white.png';
import { Link} from "react-router-dom";





const AppNavbar = () =>{
      
const liStyle = {
  marginRight: 20,
  color: 'white'
 
}

   return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={brandLogo}
              width="70"
              height="50"
              className="d-inline-block align-center"
            />{' '}
            Bianca Coffee
          </Navbar.Brand>

        
    <Nav>
   
<div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
            

  <li>
                    <Link to="HomePage" style={liStyle} >Начало</Link> 
                   </li>
                 
                <li> 
                    <Link to="MaintenancePage" style={liStyle} >Зареждане</Link>
                    </li>
                    <li> 
                    <Link to="RepairPage" style={liStyle} >Ремонт</Link>
                    </li>
                <li>
                    <Link to="ArticlesPage" style={liStyle} >Статии</Link>
                </li>
                <li>
                    <Link to="ContactsPage" style={liStyle} >Контакти</Link>
                </li>
                </ul>
</div>
</Nav>
</Container>
</Navbar>
</>
);
}
export default AppNavbar;