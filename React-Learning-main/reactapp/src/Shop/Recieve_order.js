import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Table } from 'react-bootstrap';
import Detail from "./Detail";
import { useParams } from "react-router-dom";
import Delete from "./Delete";
import Head from "./Head";
import Style from "../Component/Style/product.module.css";

const Recieve_orders = (props) => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate('');
    const { id } = useParams();

    const [value, setValue] = useState();


    const DeleteSubmit = (e, iddd) => {
        // e.preventDefault();
        console.log("iddddd", iddd)
        axios.get(`http://127.0.0.1:8000/api/delete_order/${iddd}`).then(response => {


            // var token = resp.data;
            console.log("kkkkkkk");
            // var user = {userId: token.userid, access_token:token.token};
            // localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));

            // navigate('/delete');
        }).catch(err => {
            console.log(err);
        });


    }
    const AcceptedSubmit = (e, iddd) => {
        // e.preventDefault();
        console.log("iddddd", iddd)
        axios.get(`http://127.0.0.1:8000/api/accept_order/${iddd}`).then(response => {


            // var token = resp.data;
            console.log("kkkkkkk");
            // var user = {userId: token.userid, access_token:token.token};
            // localStorage.setItem('user',JSON.stringify(user));
            // console.log(localStorage.getItem('user'));

            // navigate('/delete');
        }).catch(err => {
            console.log(err);
        });


    }


    useEffect(() => {
        // if (localStorage.getItem('user')){
        axios.get("http://127.0.0.1:8000/api/orders/list")
            .then(resp => {
                console.log(resp.data);
                setOrders(resp.data);
            }).catch(err => {
                console.log(err);
            });

        // }else{
        //     alert(" please ,Login ");
        //     //navigate('/login');
        // }


    }, []);

    return (
        // <div>
        //     <h1>All Products</h1>


        //     <ul>
        //         {
        //             products.map(p=>(
        //                 <Detail name={p.name} price={p.price} image={p.image}  />
        //                 // <li key={p.id}>{p.name}</li>
        //             ))
        //         }
        //     </ul>


<>

<Head />
        <div  className={Style.main} >
            
            <Table striped bordered hover size="sm">
    <thead>
        <tr>
            <th>Name</th>
         
            <th>Price</th>
            <th>status</th>
        </tr>
    </thead>
    <tbody>
        {
            orders.map(p => (
                <tr>
                    <td>{p.id}</td>
                  
                    <td>{p.Price}</td>
                    <td>{p.status}</td>

                    <td><Link to={`/detail_orderlist${p.id}`}>Details</Link></td>
                    {/* <td><Link to={axios.get(`http://127.0.0.1:8000/api/delete_product/${p.id}`)}>Delete</Link></td> */}
                    {/* <td> <button onClick={axios.get(`http://127.0.0.1:8000/api/delete_product/${p.id}`)}>Delete</button></td> */}

                    <td><button onClick={(e) => AcceptedSubmit(e, p.id)}>Accepted</button></td>
                    <td> <button onClick={(e) => DeleteSubmit(e, p.id)}>Delete</button></td>


                </tr>
            ))
        }

    </tbody>
</Table>

        </div>


        </>


    )
}
export default Recieve_orders;





/////   <Nav />
