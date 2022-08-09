import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios'

import { useParams } from "react-router-dom";
import Nav from './Nav';

export default function AShopInformation(){
  const {id} =useParams();
  const [user, setUser] = useState([]);
  useEffect(()=>{
     console.log(id);
    //if (localStorage.getItem('user')){
     axios.get(`http://127.0.0.1:8000/api/profile/${id}`)
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
            <th>SHOP NAME</th>
            <th>SHOP EMAIL</th>
            <th>SHOP PHONE</th>
            <th>SHOP ADDRESS</th>
          </tr>
        </thead>
        <tbody>
        {
         
            <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            </tr>
         
        }
        </tbody>
      </Table>
       </>
    );
}