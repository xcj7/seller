import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';

function DeliveryHistory() {
  const [user, setUser] = useState([]);

  useEffect(()=>{
  
    //if (localStorage.getItem('user')){
     axios.get(`http://127.0.0.1:8000/api/delivery`)
     .then(resp=>{
     
       setUser(resp.data);
       
      }).catch(err=>{
       console.log(err);
      }
     );

 },[]);
  return (
   <>
   <Nav />
   <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>CUSTOMER NAME</th>
          <th>SHOP NAME</th>
          <th>DELIVERYMAN NAME</th>
          <th>PRODUCT NAME</th>
          <th>QUANTITY</th>
          <th>TOTAL PRICE</th>
        </tr>
      </thead>
      <tbody>
        {
          user.map(p=>(
            <tr>
          <td>{p.id}</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
          ))
        }
      </tbody>
    </Table>
   </>
  );
}

export default DeliveryHistory;