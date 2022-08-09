import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Delete = ()=>{
    let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");
    const {id} =useParams();
    const navigate = useNavigate('');
    navigate('/allproduct');
    const DeleteSubmit= ()=>{
      
        axios.get("http://127.0.0.1:8000/api/products/list").then(response =>{
        
        //     // var token = resp.data;
        //      console.log("kkkkkkk");
            // var user = {userId: token.userid, access_token:token.token};
            // localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));
            navigate('/allproduct');
        }).catch(err=>{
            console.log(err);
        });


    }
    
}
export default Delete;  