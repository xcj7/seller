import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Nav from './Nav';


export default function DeliverymanRequest(){

  const [user, setUser] = useState([]);
  const [id, setId] = useState();
  useEffect(()=>{
  
    //if (localStorage.getItem('user')){
     axios.get(`http://127.0.0.1:8000/api/request`)
     .then(resp=>{
      console.log(resp.data);
       setUser(resp.data);
      }).catch(err=>{
       console.log(err);
      }
     );

 },[]);

 const acceptUser=(i)=>{
  axios.get(`http://127.0.0.1:8000/api/request_accept/${i}`)
     .then(resp=>{
      alert(resp.data);
      }).catch(err=>{
       console.log(err);
      }
     );
 }
 const removetUser=(i)=>{
  alert(i);
  axios.get(`http://127.0.0.1:8000/api/request_remove/${i}`)
     .then(resp=>{
      alert(resp.data);
      }).catch(err=>{
       console.log(err);
      }
     );
 }

    return(
        <>
        <Nav />
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>NID</th>
            <th>Address</th>
            <th>Status</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map(p=>(
              <tr>
            <td>{p.name}</td>
            <td>{p.email}</td>
            <td>{p.phone}</td>
            <td>{p.nid}</td>
            <td>{p.address}</td>
            <td>{p.status}</td>
            <td><Button onClick={()=>acceptUser(p.id)}>Accept</Button></td>
            <td><Button  onClick={()=>removetUser(p.id)}>Remove</Button></td>
            
          </tr>
            ))
          }
        </tbody>
      </Table>
        </>
    );
}