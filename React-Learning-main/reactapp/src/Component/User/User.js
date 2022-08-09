
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import DeliverymanRequest from '../DeliverymanRequest';
import OrderHistory from '../OrderHistory';
import Style from "../Style/User.module.css";
import ABuyer from './ABuyer';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axiosConfig from '../axiosConfig';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import Nav from '../Nav';


export default function User() {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [user, setUser] = useState([]);
  const [value, setValue] = useState('buyer');
  const navigate = useNavigate('');
  
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1000);
  },[loading]);


  useEffect(()=>{
  

    //if (localStorage.getItem('user')){
     axios.get(`http://127.0.0.1:8000/api/registration/${value}`)
     .then(resp=>{
      console.log('-------');
       setUser(resp.data);
      }).catch(err=>{
       console.log(err);
      }
     );

 },[value]);

  return (
   <div>
      <Nav />
     {loading ?  <PacmanLoader className={Style.spinner} size={50} color='aqua' loading={loading}></PacmanLoader>
    :
    <div className={Style.body}>
    <Button className={Style.btn}
      onClick={() => 
       {
        setOpen(!open);
        setValue('buyer');
       }
      }
      aria-controls="example-collapse-text"
      aria-expanded={open}
    >
      CUSTOMER INFORMATION
    </Button>
    <Collapse in={open}>
      <div id="example-collapse-text">
      <ABuyer value={user} />
      </div>
    </Collapse>
    <Button className={Style.btn}
      onClick={() => {
        setOpen(!open);
        setValue('seller');
       }
        
      }
      aria-controls="example-collapse-text1"
      aria-expanded={open1}
    >
      SHOP INFORMATION   
    </Button>
    <Collapse in={open1}>
      <div id="example-collapse-text1">
      <ABuyer value={user} />
      </div>
    </Collapse>

    <Button className={Style.btn}
      onClick={() => {
        setOpen(!open);
        setValue('deliveryman');
       }}
      aria-controls="example-collapse-text2"
      aria-expanded={open2}
    >
      DELIVERYMAN INFORMATION
    </Button>
    <Collapse in={open2}>
      <div id="example-collapse-text2">
      <ABuyer value={user} />
      </div>
    </Collapse>
  </div>
  }
   </div>
  );
}

