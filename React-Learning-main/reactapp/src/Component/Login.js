
import Style from "./Style/Login.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from "./Image/pic2.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Login(){

  const navigate  = useNavigate("");
  const [email, setEmail] = useState([]);

  const [password, setPassword] = useState([]);
  
  
 
  

  const onSubmitted= (e) =>{
    e.preventDefault();
    var obj = { email: email, password: password};
    axios.post("http://127.0.0.1:8000/api/login",obj)
    .then(resp=>{
        var token = resp.data;
        var user = {userId: token.token.u_id, access_token:token.token.token};
        localStorage.setItem('user',JSON.stringify(user))
        if(token === "No user found"){
          navigate('/login');
        }
     
     else{
      if(token.type =='Admin'){
        navigate('/home');
       }
       else if(token.type == 'seller')
       {
        navigate('/allProduct');
       }
       else if(token.type == 'deliveryman')
       {
        navigate('/order_request');
       }
     
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
       <h2 className={Style.title}>LOGIN</h2>
   
       <Form>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
         <span>Registration as </span> <Link to="/buyer">  Buyer  </Link> <span>  OR  </span><Link to="/seller"> Seller </Link> <span> OR </span><Link to="/deliveryman"> Deliveryman </Link> <br/> <br/>
      <Button variant="primary" onClick={onSubmitted} type="submit">
        LOGIN
      </Button>
     </Form>
      </div>
      
     </div>
        }
        </>
   
    );
}