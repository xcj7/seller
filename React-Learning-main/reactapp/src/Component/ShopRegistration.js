
import Style from "./Style/ShopRegistration.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from "./Image/tushar.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function ShopRegistration(){

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [nid, setNid] = useState([]);
  const [address, setAddress] = useState([]);
  const [password, setPassword] = useState([]);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState('');
  const navigate  = useNavigate("");
  

  const onSubmitted= (e) =>{
    e.preventDefault();
    var obj = {name:name, email: email, phone: phone, nid: nid, address: address, password: password, type:'seller', status:'active'};
    axios.post("http://127.0.0.1:8000/api/seller_email",obj)
    .then(resp=>{
        var token = resp.data;
        alert("Registration successfuly completed");
        console.log(token);
        if(token ==='success')
        {
             navigate('/login');
        }
        else
        {
            navigate('/seller');
        }
      
       
    }).catch(err=>{
        console.log(err);
    });
}

    return(
       
        <>
        
        {
         
          <div className={Style.section} >
   
        <div>
             <img className={Style.b} src={img} />
         </div>
         <div className={Style.main}>
       <h2 className={Style.title}>SHOP REGISTRATION</h2>
   
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
      </Button><br/>
      <span>All ready have an account? </span> <Link to="/login">Login</Link>
     </Form>
      </div>
      
     </div>
        }
        </>
   
    );
}