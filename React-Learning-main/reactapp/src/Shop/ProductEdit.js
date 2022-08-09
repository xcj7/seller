import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Head from "./Head";

import img from "../Component/Image/shop2.webp";
import Style from "../Component/Style/product.module.css";

export default function ProductEdit() {
    let [price, setPrice] = useState("");
    let [name, setName] = useState("");
    let [image, setImage] = useState("");
    const navigate = useNavigate('');

    const [type, setType] = useState([]);
    const [status, setStatus] = useState([]);
    const [description, setDescription] = useState([]);
    const [qty, setQty] = useState([]);
    const [shop_id, setShop_id] = useState([]);
    const [offer, setOffer] = useState([]);











    const { id } = useParams();
    const [product, setProduct] = useState([]);





    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/APIProduct_details/${id}`).then(response => {
            setPrice(response.data.p_price);
            setName(response.data.p_name);
            setImage(response.data.image);
            setType(response.data.p_type);
            setStatus(response.data.status);
            setDescription(response.data.p_description);
            setQty(response.data.p_qty);
            setShop_id(response.data.shop_id);
            setOffer(response.data.p_offer);


        });

    }, []);








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
        data.append('id', id)
        console.log("data-----", data)

        data.append('p_type', type)
        data.append('status', status)
        data.append('p_description', description)
        data.append('p_qty', qty)
        data.append('shop_id', shop_id)
        data.append('p_offer', offer)

        //  var obj = {id: id,p_name: name, p_price: price,image: image};

        //    console.log("-------image", obj)
        axios.post("http://127.0.0.1:8000/api/product_edited", data)
            .then(resp => {
                var token = resp.data;
                console.log(token);
                setProduct(resp.data);

                // var user = {userId: token.userid, access_token:token.token};
                // localStorage.setItem('user',JSON.stringify(user));


                // console.log(localStorage.getItem('user'));
            }).catch(err => {
                console.log(err);
            });


    }











    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/APIProduct_details/${id}`).then(response => {
            setProduct(response.data);
            console.log(response.data);
        });

    }, []);


    return (
        <>
            <Head />
            <div className={Style.main} >


                <div>
                    <img className={Style.b} src={img} />
                </div>
                <div className={Style.product}>
                    <h2>Edit product details</h2>
                    <form onSubmit={(e) => productSubmit(e)} encType="multipart/form-data" id="imageForm">
                        <div className="form-group">
                            <label>Product Name:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>price:</label>
                            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <strong>Image:</strong>
                            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                            <strong>you must select an image !!</strong>
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
                            save
                        </button>
                    </form>


                </div>


            </div>
        </>
    )

}
// export default ProductEdit;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
