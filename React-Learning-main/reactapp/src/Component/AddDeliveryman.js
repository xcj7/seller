import { PropagateLoader } from "react-spinners";
import Style from "./Style/AddDeliveryman.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from "./Image/add_deliveryman.png";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";


export default function AddDeliveryman(){

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [nid, setNid] = useState([]);
  const [address, setAddress] = useState([]);
  const [password, setPassword] = useState([]);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState('');
  
  
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1000);
  },[loading]);
  

  const onSubmitted= (e) =>{
    
    var obj = {name:name, email: email, phone: phone, nid: nid, address: address, password: password};
    axios.post("http://127.0.0.1:8000/api/email",obj)
    .then(resp=>{
        var token = resp.data;
        setResponse(token);
      alert(token);
       
    }).catch(err=>{
        console.log(err);
    });
}

    return(
       
        <>
        <Nav/>
        {
          loading ?  <PropagateLoader className={Style.spinner} size={50} color='aqua' loading={loading}></PropagateLoader>  
          :
          <div className={Style.section} >
   
        <div>
             <img className={Style.b} src={img} />
         </div>
         <div className={Style.main}>
       <h2 className={Style.title}>DELIVERYMAN REGISTRATION</h2>
   
       <Form>
       <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>FULL NAME</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>EMAIL ADDRESS</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>PHONE</Form.Label>
        <Form.Control type="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNid">
        <Form.Label>NID</Form.Label>
        <Form.Control type="nid" value={nid} onChange={(e)=>setNid(e.target.value)} placeholder="Enter NID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>ADDRESS</Form.Label>
        <Form.Control type="address" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PASSWORD</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Button variant="primary" onClick={onSubmitted} type="submit">
        Submit
      </Button>
     </Form>
      </div>
      
     </div>
        }
        </>
   
    );
}