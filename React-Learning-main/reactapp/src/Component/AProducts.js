import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function AProducts(){
  const [user, setUser] = useState([]);
  useEffect(()=>{
  
    //if (localStorage.getItem('user')){
     axios.get(`http://127.0.0.1:8000/api/product`)
     .then(resp=>{
      console.log(resp.data);
       setUser(resp.data);
      }).catch(err=>{
       console.log(err);
      }
     );

 },[]);

    return(
        <>
        <Nav />
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>PRODUCT NAME</th>
            <th>CATEGORY</th>
            <th>QUANTITY</th>
            <th>STATUS</th>
            <th>PRICE</th>
            <th>OFFERED PRICE</th>
            <th>UPLOADED AT</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map(p=>(
              <tr>
            <td>{p.p_name}</td>
            <td>{p.p_type}</td>
            <td>{p.status}</td>
            
            <td>{p.p_qty}</td>
            <td>{p.p_price}</td>
            <td>{p.p_offer}</td>
            <td>{p.created_at}</td>
            <td> <Link to={`/shop_info${p.shop_id}`}>SHOP INFORMATION</Link> </td>
          </tr>
            ))
          }
      
        </tbody>
      </Table>
        </>
    );
}