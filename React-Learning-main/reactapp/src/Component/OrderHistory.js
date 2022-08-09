import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function OrderHistory(){
  const [user, setUser] = useState([]);
  useEffect(()=>{
  
    //if (localStorage.getItem('user')){
     axios.get(`http://127.0.0.1:8000/api/order`)
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
            <th>ORDER ID</th>
            <th>ORDERD PRICE</th>
            <th>ORDERED STATUS</th>
            <th>PLACED AT</th>
            <th>DELIVERED AT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map(p=>(
              <tr>
            <td>{p.id}</td>
            <td>{p.Price}</td>
            <td>{p.status}</td>
            <td>{p.created_at}</td>
            <td>{p.updated_at}</td>
            <td> <Link to={`/ordered_user${p.u_id}`}>CUSTOMER INFORMATION</Link> </td>
          </tr>
            ))
          }
      
        </tbody>
      </Table>
       </>
    );
}