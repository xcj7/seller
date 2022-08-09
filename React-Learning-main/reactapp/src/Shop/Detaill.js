import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Head from "./Head";
export default function Details(){
    const {id} =useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{

        axios.get(`http://127.0.0.1:8000/api/APIProduct_details/${id}`).then(response =>{
            setProduct(response.data);
            console.log(response.data);
        });
        
    },[]);
    return(
       <div>
        <Head />
        <h1>Name: {product.p_name}</h1>
        <h1>price: {product.p_price}</h1>
        {/* <h1>image:    src="/shop/{product.image}" </h1> */}
        {/* <img src={product.image}/> */}
        <img  src={"http://localhost:8000/shop/" + product.image} />
        {/* C:\xampp\htdocs\laravel projects\Task_6\laravel_app\public\shop\halowa.jpg1659785496.jpg */}
       </div>
    )
}