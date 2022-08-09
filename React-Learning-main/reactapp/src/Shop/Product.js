import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "./Head";
import Style from "../Component/Style/product.module.css";
import Form from 'react-bootstrap/Form';
import FormRange from "react-bootstrap/esm/FormRange";

import Style1 from "../Component/Style/product.module.css";
import img from "../Component/Image/shop2.webp";

const Product = () => {
    let [price, setPrice] = useState("");
    let [name, setName] = useState("");
    let [image, setImage] = useState("");
    const navigate = useNavigate('');

    let [type, setType] = useState("");
    let [status, setStatus] = useState("");
    let [description, setDescription] = useState("");
    let [qty, setQty] = useState("");
    let [shop_id, setShop_id] = useState("");
    let [offer, setOffer] = useState("");





    function handlePicInput(event) {
        console.log("imagesss", event.target.files[0])
        // let images = event.target.files[0]
        // let fd = new FormData()
        // fd.append("images", images);

        setImage(event.target.files[0])
    }


    // if (localStorage.getItem('user')){
    //     // navigate('/login');

    const productSubmit = (e) => {

        e.preventDefault();
        //    if (localStorage.getItem('user')){
        //        // navigate('/login');
        //     }else{
        //         navigate('/login');
        //     }

        //  let fd = new FormData()
        // fd.append("images", images);

        const data = new FormData()
        data.append('p_name', name)
        data.append('p_price', price)
        data.append('image', image)
        console.log("data-----", data)

        data.append('p_type', type)
        data.append('status', status)
        data.append('p_description', description)
        data.append('p_qty', qty)
        data.append('shop_id', shop_id)
        data.append('p_offer', offer)



        //var obj = {p_name: name, p_price: price,image: image};

        console.log("-------image", data)
        axios.post("http://127.0.0.1:8000/api/products/list", data)
            .then(resp => {
                var token = resp.data;
                console.log(token);


                // var user = {userId: token.userid, access_token:token.token};
                // localStorage.setItem('user',JSON.stringify(user));


                // console.log(localStorage.getItem('user'));
            }).catch(err => {
                console.log(err);
            });


    }
    return (
        <>
            <Head />
            <div className={Style.main} >


                <div>
                    <img className={Style1.b} src={img} />
                </div>
                <div className={Style.product}>
                    <h2>Add product</h2>
                    <br></br>
                    <form onSubmit={(e) => productSubmit(e)} encType="multipart/form-data" id="imageForm">
                        <Form.Group>
                            <div className="form-group">
                                <label>Product Name:</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                            </div>
                        </Form.Group>

                        <br></br>
                        <Form.Group>
                            <div className="form-group">
                                <label>price:</label>
                                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                            </div>
                        </Form.Group>
                        <br></br>
                        <div className="form-group">
                            <strong>Image:</strong>
                            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Product Type:</label>
                            <input type="text" value={type} onChange={(e) => setType(e.target.value)}></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Product status:</label>
                            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)}></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Product Description:</label>
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Product Quantity:</label>
                            <input type="text" value={qty} onChange={(e) => setQty(e.target.value)}></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Shop Id:</label>
                            <input type="text" value={shop_id} onChange={(e) => setShop_id(e.target.value)}></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Product Offer:</label>
                            <input type="text" value={offer} onChange={(e) => setOffer(e.target.value)}></input>
                        </div>
                        <br></br>


                        {/* <button onClick={productSubmit}>Add</button> */}
                        <button type="submit" className="btn btn-success">
                            Add
                        </button>
                    </form>



                </div>


            </div>
        </>

    )

    //  }else{
    //      navigate('/login');
    //  }



}
export default Product;

//      $product->name = $req->name;
// $product->price = $req->price;
// $product->image = $req->image;