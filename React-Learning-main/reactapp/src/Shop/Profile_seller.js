import Style from "../Component/Style/product.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import profile from "../Image/profile.jpg";
// import email from "../Image/email.png";
// import phone from "../Image/phone.png";
// import nid from "../Image/nid.png";
// import address from "../Image/address.gif";
import Nav from "./Head";
export default function AProfile(){

  const {id} =useParams();
  const [user, setUser] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [nid, setNid] = useState([]);
  const [address, setAddress] = useState([]);
  const [iid, setID] = useState([]);

  const [loading, setLoading] = useState(true);
useEffect(()=>{
  setTimeout(()=>{
    setLoading(false);
  },1000);
},[loading]);



  useEffect(()=>{

    axios.get(`http://127.0.0.1:8000/api/profile/${id}`).then(response =>{
        setUser(response.data);
       setName(response.data.name);
       setEmail(response.data.email);
       setPhone(response.data.phone)
       setNid(response.data.nid);
       setAddress(response.data.address);
       setID(response.data.id);
       
    });
    
},[]);





   const onSubmitted= (e) =>{
        e.preventDefault();
        var obj = {name:name, email: email, phone: phone, nid: nid, address: address, id: iid};
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
 <Nav />
     <div className={Style.main}>
          
   
      <div className={Style.product}>
       <h2>EDIT PROFILE</h2>
   
       <Form>
       <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>FULL NAME</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>EMAIL ADDRESS</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>PHONE</Form.Label>
        <Form.Control type="phone" placeholder="Enter phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNid">
        <Form.Label>NID</Form.Label>
        <Form.Control type="nid" placeholder="Enter NID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>ADDRESS</Form.Label>
        <Form.Control type="address" placeholder="Enter Address" />
      </Form.Group>

      <button type="submit"  onClick={onSubmitted} className="btn btn-success">
                            Edit
                        </button>
     </Form>
      </div>
     </div>
    </>
        
    );
}