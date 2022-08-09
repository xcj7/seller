import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Style from "../Style/AUser.module.css";
import Nav from '../Nav';
export default function ABuyer({value}) {
    
  return (
  
  <div>
 
   <Table striped bordered hover size="sm">
        
      <thead>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>TYPE</th>
          <th>STATUS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {
            value.map(p =>(
                <tr>
                  <td>{p.name}</td>
                  <td>{p.email}</td>
                  <td>{p.type}</td>
                  <td>{p.status}</td>
                  <td> <Link to={`/details${p.id}`}>See Details</Link> </td>
        </tr>

            ))
        }
      </tbody>
    </Table>
  

  
  </div>
  );
}

