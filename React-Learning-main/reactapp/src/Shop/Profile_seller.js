
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Style from "../Component/Style/product.module.css";
import img from "../Component/Image/shop2.webp";
import Head from "./Head";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

export default function AProfile(){
  const [user, setUser] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [nid, setNid] = useState([]);
  const [password, setPassword] = useState([]);
  const [address, setAddress] = useState([]);
  const [id, setID] = useState(0);
  const navigate = useNavigate('');
  useEffect(()=>{

    if (localStorage.getItem('user')){
     let obj = JSON.parse(localStorage.getItem('user'));
     console.log(obj.userId);
     axios.get(`http://127.0.0.1:8000/api/update/${obj.userId}`).then(resp =>{
   
       setUser(resp.data);
       setName(resp.data.name);
       setEmail(resp.data.email);
       setPhone(resp.data.phone)
       setNid(resp.data.nid);
       setAddress(resp.data.address);
       setPassword(resp.data.password);
       setID(resp.data.id);
      }).catch(err=>{
       console.log(err);
      }
     );

 }else{
     alert("You are not logged in. Login or registration first");
     navigate('/login');
 }

 },[]);

 const onSubmitted= (e) =>{
  e.preventDefault();
  var obj = { id:id,name:name, email: email, phone: phone, nid: nid, address: address, password: password};
  axios.post("http://127.0.0.1:8000/api/update",obj)
  .then(resp=>{
      var token = resp.data;
      alert(token);
     
  }).catch(err=>{
      console.log(err);
  });
}
    return(
    <>
 <Head />
     <div className={Style.main}>
    
   
      <div  className={Style.product}>
       <h2>EDIT PROFILE</h2>
   
       <Form>
       <Form.Group className="mb-3" controlId="formBasicName">
       <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>EMAIL </Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>PHONE</Form.Label>
        <Form.Control type="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNid">
        <Form.Label>NID</Form.Label>
        <Form.Control type="nid" value={nid} onChange={(e)=>setNid(e.target.value)} placeholder="Enter Nid" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>ADDRESS</Form.Label>
        <Form.Control type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
      </Form.Group>
      <input type='hidden' value={id} onChange={(e)=>setID(e.target.value)} />
      <Button variant="success" onClick={onSubmitted} type="submit">EDIT</Button>
     </Form>
      </div>
     </div>
    </>
        
    );
}