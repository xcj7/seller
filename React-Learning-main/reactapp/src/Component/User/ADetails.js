import { PropagateLoader } from "react-spinners";
import Style from "../Style/ADetails.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import buyer from "../Image/buyer.jpg";
import seller from "../Image/seller.png";
import delivery from "../Image/delivery.webp";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ADetails(){

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
        {
            loading ?  <PropagateLoader className={Style.spinner} size={50} color='aqua' loading={loading}></PropagateLoader>
            : 
            <div className={Style.section} >
   
         <div>
             {
               user.type === `buyer` ? <img className={Style.b} src={buyer} /> : user.type === `seller` ? <img className={Style.b} src={seller} />:user.type === `deliveryman` ? <img className={Style.b} src={delivery} /> : null 
             }
                  
                
             </div>
             <div className={Style.main}>
           <h2 className={Style.title}>{user.type ===`buyer` ? "EDIT BUYER INFORMATION" : user.type === `seller`? "EDIT SELLER INFORMATION": user.type === `deliveryman`? "EDIT DELIVERYMAN INFORMATION": null}</h2>
       
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
          <input type='hidden' value={user.id}></input>
    
          
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