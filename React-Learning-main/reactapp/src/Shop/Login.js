import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ()=>{
    let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");
    const navigate = useNavigate('');

    const loginSubmit= ()=>{
        var obj = {email: name, password: password};
        console.log(obj);
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.userid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
            navigate('/allproduct');
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div>
              <br/>
            <h3>LOGIN</h3>

            <form>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter email" /> <br /> 
                <br/>
                         <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
            </form>
                <button onClick={loginSubmit}>Login</button>
        </div>

    )
}
export default Login;  