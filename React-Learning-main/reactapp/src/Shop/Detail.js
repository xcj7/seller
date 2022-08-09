import React from "react"
// import { Card } from "react-bootstrap";
import card from "./Card";

const Detail = (props) =>{
    return(
        <div>
            
            
             <td> 
             {/* <p>Product: <b>{props.name}</b> Price: <b>{props.price}</b> image: <b>{props.image}</b></p> */}
             <card props={props}/>
             </td>
          
            
         
 


        </div>



    )
}
export default Detail;  


        
