
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Style from "./Style/AsideNav.module.css";
import { Link } from 'react-router-dom';
import menue from "./Image/menue.png";


function AsideNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
     <img className={Style.menue} src={menue} />
      </button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={Style.title}>E-BUYING</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul>
            <li className={Style.li}><Link className={Style.a} to="/profile">PROFILE</Link></li>
             <li className={Style.li}><Link className={Style.a} to="/user">USERS</Link></li>
              <li className={Style.li}><Link className={Style.a} to="/add_deliveryman">ADD DELIVERYMAN</Link></li>
              <li className={Style.li}><Link className={Style.a} to="/delivery_history">DELIVERY HISRORY</Link></li>
              <li className={Style.li}><Link className={Style.a} to="/delivery_request">DELIVERYMAN REQUEST</Link></li>
              <li className={Style.li}><Link className={Style.a} to="/order_history">ORDER HISTORY</Link></li>
              <li className={Style.li}><Link className={Style.a} to="/products">PRODUCTS</Link></li>
              <li className={Style.li}><Link className={Style.a} to="/home">LOGOUT</Link></li>
            
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AsideNav;