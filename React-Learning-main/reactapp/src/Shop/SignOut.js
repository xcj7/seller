import Reeact,{ useState, useEffect } from 'react';
import axios from "axios"
import { useNavigate  } from "react-router-dom"


const SignOut = () => {
    const navigate  = useNavigate();
    useEffect(()=>{
        if (localStorage.getItem('user')){
   
    let user = JSON.parse(localStorage.getItem('user'));

    var obj = {token: user.access_token};
    axios.post("http://127.0.0.1:8000/api/logout",obj)
    .then(resp=>{
        localStorage.clear()
        var data = resp.data;
        console.log(data);
        navigate('/login');
    }).catch(err=>{
        console.log(err);
    });
}else{
    navigate('/login');
}


},[]);


}

export default SignOut