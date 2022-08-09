// import React from "react";
// import AllProduct from './AllProduct';
// import Product from './Product';
// import { Link } from "react-router-dom";
// const Head = () => {
//     return(
//         <div>
           
//             <Link to="/product">||Product add ||</Link>
//             <Link to="/allproduct">|| Products show ||</Link>
//             <Link to="/login">|| Login ||</Link>
//             <Link to="/signout">|| signout ||</Link>
//             <Link to="/registration">|| Registration ||</Link>
         
//         </div>
//     )
// }
// export default Head;

import Nav from 'react-bootstrap/Nav';
import React from "react";
import AllProduct from './AllProduct';
import Product from './Product';
import { Link } from "react-router-dom";
const Head = () => {
    return (
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link href="/product">Product add</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/allproduct">Products show</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          {/* <Nav.Link href="/login">Login</Nav.Link> */}
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="/recieve_order">received orders</Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
           <Nav.Link href="/profile_seller">Profile</Nav.Link> 
          </Nav.Item>
          
          <Nav.Item>
          <Nav.Link href="/signout">signout</Nav.Link>
          </Nav.Item>
          
          
          
        </Nav>
      );
}
export default Head;