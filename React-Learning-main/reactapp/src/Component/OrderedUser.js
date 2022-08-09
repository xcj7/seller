import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Nav from './Nav';
export default function OrderedUser(){
  const {id} =useParams();
  const [user, setUser] = useState([]);
  useEffect(()=>{
     console.log(id);
    //if (localStorage.getItem('user')){
     axios.get(`http://127.0.0.1:8000/api/ordered_user/${id}`)
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
        <nav />
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>CUSTOMER NAME</th>
            <th>CUSTOMER EMAIL</th>
            <th>CUSTOMER PHONE</th>
            <th>CUSTOMER ADDRESS</th>
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