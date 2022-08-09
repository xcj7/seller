import React, {useState, useEffect , Component } from "react";


import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Select from 'react-select';

const Registration = ()=>{
    let[email, setEmail]= useState("");
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");
    let[phone, setPhone]= useState("");
    let[nid, setNid] = useState("");
    let[type, setType] =useState("");
    let[address, setAddress] =useState("");
    const navigate = useNavigate('');
    
    const Countries = [
        { label: "Shop", value: "Shop" },
        { label: "Buyer", value: "Buyer" },
        { label: "Transportation man", value: "Transportation man" },
       
      ];


    const RegistrationSubmit= ()=>{
        var obj = {name: name, email: email ,phone: phone,nid: nid,address: address,password: password,type: type};
        console.log(obj);
        axios.post("http://127.0.0.1:8000/api/registration",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            navigate('/login');
         //   var user = {userId: token.userid, access_token:token.token};
          //  localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div>
           
              <br/>
            <h3>Registration</h3>

            <form>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" /> <br /> 
                
                 <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" /><br /> 

                 <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter phone" /> <br /> 
                
                <input type="text" value={nid} onChange={(e)=>setNid(e.target.value)} placeholder="Enter nid" /><br /> 

                <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter address" /> <br /> 
                
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" /><br />

                <input type="text" value={type} onChange={(e)=>setType(e.target.value)} placeholder="Enter type" /> <br /> 
                 {/* <Select options={Countries} /> */}





            </form>
                <button onClick={RegistrationSubmit}> submit </button>
        </div>

    )
}
export default Registration;  


// $st = new AllUser();
// $st->name = $request->name;
// $st->email = $request->email;
// $st->phone = $request->phone;
// $st->nid = $request->nid;
// $st->address = $request->address;
// $st->password =$request->password;
// $st->type = $request->type;
// $st->status = "active";